
export class GradeSchool {
    constructor() {
        this._roster = {};
    }
  roster() {
      Object.keys(this._roster).forEach(grade => this._roster[grade].sort());
        return JSON.parse(JSON.stringify(this._roster));
  }

  add(student, grade) {
        if (this._roster[grade] === undefined) {
            this._roster[grade] = [];
        }
        try {
            Object.keys(this._roster).forEach(grade => {
                let index = this._roster[grade].indexOf(student);
                if (index !== -1) {
                    this._roster[grade].splice(index, 1);
                }
            })
            this._roster[grade].push(student);
        }
        catch (e) {
            console.error(e.toString());
        }
  }

  grade(grade) {
        if (this._roster[grade]?.length) {
            return [ ...this._roster[grade].sort() ];
        }
        return [];
  }
}
