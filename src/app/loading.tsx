import Image from 'next/image'
import loading_img from '../../public/icon/loading.gif';

export default function Page() {
    return (
        <Image
            src={loading_img}
            alt="Picture of the author"
            width={50} 
            height={50} 
        />
    )
}