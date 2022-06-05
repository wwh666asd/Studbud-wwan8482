var taskList = []

        // render list
        function renderList() {
            var taskWrap = document.querySelector('.task-wrap')
            var html = []
            for (var i = 0; i < taskList.length; i++) {
                var task = taskList[i]
                html.push(`
                <div class="task">
                    <div class="mark" style="background: ${task.mark}"></div>
                    <div class="title">${task.title}</div>
                    <div class="rating">${task.rating}</div>
                    <div class="time">${task.time}</div>
                    <div class="due-date">${task.date}</div>
                    <div class="status">${task.status}</div>
                </div>
            `)
            }

            taskWrap.innerHTML = html.join('')
        }

        renderList()

        var newBtn = document.querySelector('.new-btn')
        var dialog = document.querySelector('.dialog')
        newBtn.onclick = () => {
            // show dialog
            dialog.className = 'dialog active'
        }

        var submitBtn = document.querySelector('.submit-btn')
        // create task
        submitBtn.onclick = () => {
            var title = document.getElementById('title')
            var color = document.getElementById('color')
            var rating = document.getElementById('rating')
            var time = document.getElementById('time')
            var date = document.getElementById('date')
            var status = document.getElementById('status')

            taskList.push({
                title: title.value,
                mark: color.value,
                rating: rating.value,
                time: time.value,
                date: date.value,
                status: status.value
            })

            renderList()
            dialog.className = 'dialog'

        }