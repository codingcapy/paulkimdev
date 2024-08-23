

export default function Footer() {

    return (
        <footer className="mx-auto text-center">
            <div className="md:flex">
                <div className="py-2 md:px-5">
                    <h2 className="text-xl text-teal-300">Contact</h2>
                    <ul>
                        <li>T: +1 (778) 994-4939</li>
                        <li>E: spkim0921@gmail.com</li>
                    </ul>
                </div>
                <div className="py-2 md:px-5">
                    <h2 className="text-xl text-teal-300">Location</h2>
                    <ul>
                        <li>North Vancouver, BC</li>
                        <li>Canada</li>
                    </ul>
                </div>
            </div>
            <p className="py-2">Copyright&copy; 2022 Capytech. All rights reserved.</p>
        </footer>
    )
}