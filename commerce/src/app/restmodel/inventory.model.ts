export class InventoryItem{
    constructor(){
    public  userId: number;
	public  inventoryId: number;
	public  categoryId: number;
	public  userCategoryId: number;
	public  make: string;
	public  name: string;
	public  serialNumber: number;
	public  seller: string;
	public  price: string;
	public  purchaseDate;
	public  model: string;
	public  quantity: number;
	public  conditions: Array<String>; 
	public  likes: number;
	public  privacy: string;
	public  shareLink: string;
	public  shareEmbed: string;
	public  inventoryWarranty: Array<String>;
	public  inventoryComments: Array<String>;
	public  inventoryNotes: Array<String>;
	public  inventoryTags: Array<String>;
	public  inventoryMedias: Array<String>;
	public  updatedDate: string;
	public  createdDate: string;
	public  inventoriesList: Array<String>;
	
    }
}