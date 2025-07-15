//@ts-nocheck
import {Link} from "react-router";
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";
import {NavItems} from "./index";

const MobileSidebar = () => {
    let sidebar: SidebarComponent

    const toogleSidebar = () => {
        sidebar.toggle()
    }

    return (
        <div className='mobile-sidebar wrapper'>
            <header>
                <Link to="/">
                    <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]"/>
                    <h1>Travel App</h1>
                </Link>

                <button onClick={toogleSidebar}>
                    <img src="/assets/icons/menu.svg" alt="menu" className="size-7"/>
                </button>
            </header>

            <SidebarComponent
                width={270}
                ref={(Sidebar) => sidebar = Sidebar}
                created={() => sidebar.hide()}
                closeOnDocumentClick={true}
                showBackdrop={true}
                type='over'
            >
                <NavItems handleClick={toogleSidebar}/>
            </SidebarComponent>
        </div>
    )
}

export default MobileSidebar
