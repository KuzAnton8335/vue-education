// создание приложения при помощи Vue
const App = {
	// данные для работы с Vue {обьект}
	data() {
		return {
			title: "Список заметок",
			placeholderString: "Введите название заметки",
			inputValue: '',
			notes: ['Заметка 1']
		}
	},
	//методы в Vue
	methods: {
		// вывод текстового поля input
		inputChangeHandler(event) {
			this.inputValue = event.target.value
		},
		// добавление заметки
		addNewNote() {
			//проверка наличия пустой строки при помощи if
			if (this.inputValue != '') {
				this.notes.push(this.inputValue)
				this.inputValue = ''
			}
		},
		//вывод заметки с заглавной буквы
		toUpperCase(item) {
			return item.toUpperCase();
		},
		// удаление заметки
		removeNote(idx) {
			this.notes.splice(idx, 1)
		}
	}
}
// создаем переменную app и монтируем данные в html при помощи app
const app = Vue.createApp(App).mount("#app");
// ? остановился на времени 1:32:23
