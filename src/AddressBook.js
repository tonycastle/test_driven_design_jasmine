class AddressBook{
    constructor(){
        this.contacts = [];
        this.initialComplete =false;
    }

    addContact(contact){
        this.contacts.push(contact);
    }

    getContact(id){
        return this.contacts[id];
    }

    deleteContact(index){
        this.contacts.splice(index,1);
    }

    getInitialContacts(cb){   
        setTimeout(()=>{
            this.initialComplete = true;
            if(cb){
                return cb();
            }
        },3);
    }
}