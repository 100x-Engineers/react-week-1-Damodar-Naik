import Logo from '../../assets/100x.svg'


export default function Header100x() {
    return (
        <header className="flex w-full py-3 px-4 items-center justify-center">
            <img src={Logo} className="w-14 block" />
        </header>
    );
}

