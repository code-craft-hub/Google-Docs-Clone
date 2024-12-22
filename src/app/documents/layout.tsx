const DcoumentsLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="flex flex-col gap-y-4">
            <nav className="">
                Document navbar
                {children}
            </nav>
        </div>
     );
}
 
export default DcoumentsLayout;