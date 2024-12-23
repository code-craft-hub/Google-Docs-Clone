const DcoumentsLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="flex flex-col gap-y-4">
            <nav className="">
                {children}
            </nav>
        </div>
     );
}
 
export default DcoumentsLayout;