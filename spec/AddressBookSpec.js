describe('Address Book',function(){
    var addressBook, thisContact;

    beforeEach(()=>{
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it('Should be able to add a Contact', function(){
        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);    
    });

    it('Should be able to delete a Contact', function(){
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();    
    });
});


describe("Asynch Address Book",()=>{

    let addressBook;

    beforeEach((done)=>{
        addressBook = new AddressBook();
        addressBook.getInitialContacts(function(){
            done();
        });
    });
    
    it("should load initial contacts asynchronously",(done)=>{   
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});