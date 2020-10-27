export default bug
function bug(bug){
    if(bug!== undefined){
        this.id=bug.id
        this.name=bug.name
        this.details=bug.details
        this.steps=bug.steps
        this.version=bug.version
        this.priority= 3
        this.creator= bug.creator
        this.time=bug.time
        this.company= bug.company
        this.completed=false
    }
}