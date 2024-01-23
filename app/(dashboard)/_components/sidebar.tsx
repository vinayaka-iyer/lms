import {Logo} from './logo'
import { SiderbarRoutes } from './sidebar-routes';
export const Sidebar = () => {
	return <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm ">
        <div className="p-7">
            <Logo />
        </div>
        <div className="flex flex-col w-full">
            <SiderbarRoutes />
        </div>
    </div>;
};
