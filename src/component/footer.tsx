export default function Footer_Component({footerData}:any){
    return (
      <div>
         {footerData.address}
         {footerData.phone}
         {footerData.name}
      </div>
    );
  };