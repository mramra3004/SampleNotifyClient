export interface SupplierModel {
        Id: number;
        uid: string;
        name: string;
        Code: string;
        Country: string;
        Province: string;
        District: string;
        Commune: string;
        Address: string;
        Phone: string;
        Website: string;
        ObjectGroup: number;
        Identify: string;
        IdIssuedDate: Date | string | null;
        IdIssuedBy: string;
        Gender: number | null;
        Email: string;
        TaxCode: string;
        Represent: string;
        RepGender: number | null;
        RepTitle: string;
        RepPhone: string;
        RepMobile: string;
        RepEmail: string;
        BankNumber: string;
        BankName: string;
        BankBranch: string;
        BankProvince: string;
        Active: boolean | null;
        CreatedBy: string;
        CreatedDate: Date | string;
        ModifiedBy: string;
        ModifiedDate: Date | string | null;
        SyncAccStatus: number | null;
        SyncAccDate: Date | string | null;
        SyncAccStatusDisplay: string;
        AccountId: string;
}
export class SupplierList {
        id: number;
        name: string;
        country: string;
        province: string;
        district: string;
        address: string;
        phone: string;
        website: string;
        email: string;
        accountId: string;
        buyer: number | null;
}