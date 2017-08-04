'use strict';

class studentEnrollment{
	constructor(){
		this.studentArr = [ ];
		this.studentDetails = {};
		this.name = document.querySelector('#txtName');
		this.age = document.querySelector('#txtAge');
		this.grade = document.querySelector('#txtGrade');
		this.outputTbl = document.querySelector('#output table tbody');
		this.assignEvent();
	}

	assignEvent(){
		this.grade.addEventListener('keypress', (e) => {
			if(this.name.value == ''){
				alert("Please enter the name");
				this.name.focus();
				return false;
			}
			if(e.keyCode === 13) {
				this.submitStudent();
			}
		});
	}

	submitStudent(){
		this.studentDetails = {
			name: this.name.value || 'NA',
			age: this.age.value || 'NA',
			grade: this.grade.value || 'NA'
		};
		this.studentArr.push(this.studentDetails); // Have it pushed to array
		this.displayStudent();
	}
		
	displayStudent(){
		this.template = this.updateTemplate();
		this.appendStudent();
	}

	appendStudent(){
		this.outputTbl.innerHTML += this.template;
	}

	updateTemplate(){
		let dt = this.studentDetails;
		return (
			`<tr> 
				<td width=60%>${dt.name}</td>
				<td width=20%>${dt.age}</td>
				<td width=20%>${dt.grade}</td>
			</tr>`
		)
	}
}

(()=> {
   new studentEnrollment();
})();