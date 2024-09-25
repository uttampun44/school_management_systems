import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import cn from 'classnames';


export default function Dashboard() {

    return (
        <AuthenticatedLayout>

            <div className={cn(
                    `min-h-screen p-5 bg-gray-100`
                )}>
                <div className="sm:px-6">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
