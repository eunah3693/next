

export default function Footer_Component(){
  const footerData={"name":"eunah","address":"dd","phone":"010"}

    return (
      <div className="bg-stone-800 text-white py-5">
        <div className="w-full lg:max-w-7xl mx-auto ">
          <p>{footerData.address}</p>
          <p>{footerData.phone}</p>
          <p>{footerData.name}</p>
        </div>
      </div>
    );
  };
