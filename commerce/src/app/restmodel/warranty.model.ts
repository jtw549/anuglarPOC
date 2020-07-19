export class WarrantyItem{
    constructor(){

    public inventoryWarrantyId: number;
	public inventoryId: number;
	public issuer: string;
	public length: number;
    public type: string;
    //create a address model for later probably a shared model for user and Warranty
	//public contactAddress;
	public contactPhone: string;
	public notes: string;
	public userId: number;
    }
}