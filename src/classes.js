/**
 * Class to create a Programmer
 * @example
 * const newProgrammer = new Programmer ({fullname: 'Ryan Ray', 'javascript'})
 * newProgrammer.getInfo();
 * 
 * @see https://docs.github.com/es/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template
 * @todo Implement the rest of methods
 * @tutorial first-tutorial
 */
class Programmer {
    /**
     * @param {User} user User's Information
     * @param {string} language A programming language 
    */
    constructor(user, language) {
        this.fullname=user.fullname;
        this.language=language;

    }
    /**
     * Get Programmer Information
     * @returns {void}
    * 
    */
   getInfo() {
        console.log(`I'm ${this.fullname} and my favourite programming language is ${this.language}`)
   }

}

/**
 * Know more in {@link Programmer}
 */

const programmerOne = new Programmer({fullname: 'Rayn ray'}, 'javascript')
const programmerTwo = new Programmer({fullname: 'Joe'}, 'go')

programmerOne.getInfo();
programmerTwo.getInfo();
