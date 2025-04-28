export default function Footer_Component({footerData}:any){
    return (
      <div>
         <p>{footerData.address}</p>
         <p>{footerData.phone}</p>
         <p>{footerData.name}</p>
      </div>
    );
  };
