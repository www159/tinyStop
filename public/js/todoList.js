'use strict';

// Your starting point. Enjoy the ride!
let taskAry = [];
let taskBox = $('.todo-list')
let taskInput = $('.new-todo')
let restCnt = $('.todo-count').find('strong')
let filters = $('.filters')
let filterStr = 'All'
let clearBtn = $('.clear-completed')
// [{_id: "60fa718bec5e503b14e39b65", name: "喝酒", state: 0, __v: 0}]
$.ajax({//获得数据
	url: '/home/func/todo/tasks',
	type: 'get',
	success: function(res) {
		// console.log(res)
		taskAry = res
		renderTask()
	}
})

taskInput.on('keyup', function(e){//回车添加任务
	if(e.keyCode === 13){
		let name = $(this).val()
		if(name.trim().length !== 0){
			$.ajax({
				url: '/home/func/todo/addTask',
				type: 'post',
				contentType: 'application/json',
				data: JSON.stringify({
					name
				}),
				success: function(res){
					// console.log('add task', res)
					taskAry.push(res)
					renderTask()
				}
			})
			taskInput.val('')
		}
		else{
			alert('输入名称再按回车')
		}
	}
})

taskBox.on('click', '.destroy', function(){//删除任务
	let id = $(this).attr('data-id')
	console.log(id)
	$.ajax({
		url: `/home/func/todo/tasks/${id}`,
		type: 'delete',
		success:function(res){
			// console.log(res)
			let index = taskAry.findIndex(item => item._id === id)
			taskAry.splice(index, 1)
			renderTask()
		}
	})
})

taskBox.on('change', '.toggle', function(){//打勾
	const state = $(this).is(':checked')
	const id = $(this).siblings('button').attr('data-id')
	// console.log(id)
	$.ajax({
		url: '/home/func/todo/tasks',
		type: 'put',
		data: JSON.stringify({
			id,
			state
		}),
		contentType: 'application/json',
		success: function(res){
			// console.log(res)
			let task = taskAry.find(item => item._id === id)
			task.state = res.state
			renderTask()
		}
	})
})

taskBox.on('dblclick', 'label', function(){//编辑
	$(this).parent().parent().addClass('editing')
	$(this).parent().siblings('input').val($(this).text())
	$(this).parent().siblings('input').focus()
})

taskBox.on({
	'blur': function(){//改名
		putName($(this))
	},
	'keyup': function(e){
		if(e.keyCode === 13){
			putName($(this))
		}
		else if(e.keyCode === 27){
			let id = $(this).siblings('div').find('button').attr('data-id')
			$(this).val(taskAry.find(item => item._id === id).name)
			$(this).blur()
			$(this).parent().parent().removeClass('editing')
		}
	}
}, '.edit')

filters.on('click', 'a', function(){//点击过滤器
	let text = $(this).text()
	if(text !== filterStr){
		filterStr = text
		filters.find('a').removeClass('selected')
		$(this).addClass('selected')
		renderTask(text)
	}
})

$('.clear-completed').on('click', function(){
	let deleteTask = []
	taskAry = taskAry.filter(item => {
		if(item.state === 0){
			return item
		}
		else{
			deleteTask.push(item._id)
		}
	})
	console.log(deleteTask)
	$.ajax({
		url: '/home/func/todo/clearCompleted',
		type: 'delete',
		data: JSON.stringify({deleteTask}),
		contentType: 'application/json'
	})
	renderTask()
})

clearBtn.on('click', function(){
	
})

function putName(input){
	let newName = input.val()
	let id = input.siblings('div').find('button').attr('data-id')
	$.ajax({
		url: '/home/func/todo/tasksName',
		type: 'put',
		contentType: 'application/json',
		data: JSON.stringify({
			id,
			newName
		}),
		success: function(res){
			// console.log(res)
			let task = taskAry.find(item => item._id === id)
			task.name = newName
			renderTask()
		}
	})
}


function cal(){
	let cnt = taskAry.filter(item => item.state === 0).length
	restCnt.text(cnt)
}

function renderTask(filter){
	if(!filter){
		filter = filterStr
	}
	let arr
	switch(filter){
		case 'All': {
			arr = taskAry
			break
		}
		case 'Active': {
			arr = taskAry.filter(item => item.state === 0)
			break
		}
		case 'Completed': {
			arr = taskAry.filter(item => item.state ===1)
			break
		}
	}

	if(!taskAry.find(item => item.state === 1)){
		clearBtn.css({
			'display': 'none'
		})
	}
	else{
		clearBtn.removeAttr('style')
	}
	let html = template('taskTpl', {
		tasks: arr
	})
	// console.log(html)
	taskBox.html(html)
	cal()
}

