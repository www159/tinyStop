(function (domGlobals) {
    'use strict';

    var Conf = function () {
      function Conf(name, title, textarea, latexId, prefix, suffix, clazz) {
        this.name = name;
        this.title = title;
        this.textarea = textarea;
        this.latexId = latexId;
        this.prefix = prefix;
        this.suffix = suffix;
        this.prefixLength = this.prefix.length;
        this.suffixLength = this.prefix.length;
        this.clazz = clazz;
        this.selector = '.' + this.clazz;
      }
      return Conf;
    }();

    var MathJaxHolder = function () {
      function MathJaxHolder() {
      }
      MathJaxHolder.getMathJax = function () {
        if (this.ready) {
          return this.mathJax;
        }
        if (!domGlobals.window.MathJax) {
          return;
        }
        this.mathJax = domGlobals.window.MathJax;
        this.ready = true;
        return this.mathJax;
      };
      return MathJaxHolder;
    }();

    function Plugin () {
      tinymce.PluginManager.add('tinymce-latex', setup);
    }var conf = new Conf('LaTex', 'Latex \u516c\u5f0f\u5f55\u5165', 'latex', 'data-latex', '\\(', '\\)', 'math-tex');
    var setup = function (editor) {
      editor.ui.registry.addButton('tinymce-latex', {
        text: conf.name,
        onSetup: function () {
          conf.renderId = editor.dom.uniqueId();
        },
        onAction: function () {
          onActionHandler(null);
        }
      });
      editor.on('click', function (e) {
        var container = e.target.closest(conf.selector);
        if (container) {
          onActionHandler(container);
        }
      });
      var onActionHandler = function (target) {
        var latex = '';
        var container;
        if (target) {
          latex = target.getAttribute(conf.latexId);
        }
        openLatexDialog(latex, function (api) {
          var value = getLatexValue(api);
          renderLatexInNewDocument(container.contentDocument, value);
        }, function (api) {
          var value = getLatexValue(api);
          if (target) {
            normalizeElNode(target, value);
            renderInTinyMCEDocument();
          } else {
            var element = domGlobals.document.createElement('span');
            normalizeElNode(element, value);
            editor.insertContent(element.outerHTML);
          }
          api.close();
        });
        container = domGlobals.document.getElementById(conf.renderId);
        renderLatexInNewDocument(container.contentDocument, latex);
      };
      var normalizeElNode = function (el, latex) {
        el.innerHTML = latex;
        el.setAttribute(conf.latexId, latex);
        el.setAttribute('contenteditable', 'false');
        el.classList.add(conf.clazz);
        el.style.cursor = 'pointer';
        el.style.display = 'inline-block';
        el.style.marginLeft = '5px';
        el.style.marginRight = '5px';
      };
      var openLatexDialog = function (latex, onChangeHandler, onSubmitHandler) {
        var initial = {};
        initial[conf.textarea] = latex;
        editor.windowManager.open({
          title: conf.title,
          body: {
            type: 'panel',
            items: [
              {
                type: 'textarea',
                name: 'latex'
              },
              {
                type: 'htmlpanel',
                name: 'render',
                html: '<iframe id="' + conf.renderId + '" style="width: 100%;"></iframe>'
              }
            ]
          },
          buttons: [{
              type: 'submit',
              text: '\u4fdd\u5b58'
            }],
          size: 'large',
          onChange: onChangeHandler,
          onSubmit: onSubmitHandler,
          initialData: initial
        });
      };
      var renderLatexInNewDocument = function (doc, latex) {
        renderLatexInHTMLElement(doc.body, latex);
      };
      var renderInTinyMCEDocument = function () {
        var doc = editor.getDoc();
        var elements = doc.querySelectorAll(conf.selector);
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
          var element = elements_1[_i];
          renderHTMLElement(element);
        }
      };
      var resetHTMLElement = function (el) {
        var latex = el.getAttribute(conf.latexId);
        el.removeAttribute('style');
        el.removeAttribute('contenteditable');
        el.removeAttribute('data-mce-style');
        el.removeAttribute(conf.latexId);
        el.innerHTML = normalizeLatex(latex);
      };
      var renderHTMLElement = function (el) {
        renderLatexInHTMLElement(el, el.getAttribute(conf.latexId));
      };
      var renderLatexInHTMLElement = function (el, latex) {
        var mathJax = MathJaxHolder.getMathJax();
        var options = mathJax.getMetricsFor(el, true);
        var node = mathJax.tex2svg(latex, options);
        var result = node.querySelector('svg');
        var error = node.querySelector('merror');
        if (error) {
          result = domGlobals.document.createElement('strong');
          result.style.color = '#dc3545';
          result.innerHTML = '\u5f53\u524d\u516c\u5f0f\u683c\u5f0f\u6709\u8bef: ' + error.innerHTML;
        }
        el.innerHTML = '';
        el.appendChild(result);
      };
      editor.on('GetContent', function (e) {
        var doc = editor.getDoc();
        var div = domGlobals.document.createElement('div');
        div.innerHTML = doc.body.innerHTML;
        var elements = div.querySelectorAll(conf.selector);
        for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
          var el = elements_2[_i];
          resetHTMLElement(el);
        }
        e.content = div.innerHTML;
      });
      editor.on('BeforeSetContent', function (e) {
        var div = domGlobals.document.createElement('div');
        div.innerHTML = e.content;
        var elements = div.querySelectorAll(conf.selector);
        for (var _i = 0, elements_3 = elements; _i < elements_3.length; _i++) {
          var element = elements_3[_i];
          var latex = element.getAttribute(conf.latexId);
          if (!latex) {
            latex = unNormalizeLatex(element.innerHTML);
          }
          normalizeElNode(element, latex);
        }
        e.content = div.innerHTML;
      });
      editor.on('SetContent', function (e) {
        renderInTinyMCEDocument();
      });
      var getLatexValue = function (api) {
        var data = api.getData();
        return data[conf.textarea].trim();
      };
      var normalizeLatex = function (latex) {
        return '' + conf.prefix + latex + conf.suffix;
      };
      var unNormalizeLatex = function (latex) {
        if (latex.length >= conf.prefixLength + conf.suffixLength) {
          return latex.substr(conf.prefixLength, latex.length - (conf.prefixLength + conf.suffixLength));
        }
      };
    };

    Plugin();

}(window));
