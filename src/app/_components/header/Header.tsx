import Menu from "./Menu";
import Image from 'next/image'

export default function Header() {
    return (
        <header className="w-full mt-4 sticky flex items-center justify-around">
            <div className="w-[95%] max-w-256 flex items-center justify-between">
                <div className="m-1.5">
                    <Image
                        src="/img/logo.png"
                        alt="logo"
                        width={150}
                        height={1000}
                        priority={true}
                    />
                </div>
                <Menu />
            </div>
        </header>

        
    );
}