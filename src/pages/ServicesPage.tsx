import { DocumentTextIcon, BanknotesIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const services = [
    {
        name: 'Professional Will Writing',
        description: 'A will is the cornerstone of any estate plan. We provide expert guidance to draft a legally binding will that clearly outlines your wishes, appoints guardians for your minor children, and names an executor to manage your estate, preventing family disputes and ensuring a smooth transition of your assets.',
        icon: DocumentTextIcon,
    },
    {
        name: 'Trust Creation & Management',
        description: 'For more complex situations or greater asset protection, a trust is an invaluable tool. We help you establish trusts to protect assets from creditors, provide for beneficiaries with special needs, manage assets for minors, and potentially minimize taxes, giving you control over your wealth even after you are gone.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Insurance Planning & Nomination',
        description: 'Life insurance can provide immediate liquidity for your family to cover debts, final expenses, and ongoing living costs. We help you assess your insurance needs and ensure your policy nominations (including EPF) are correctly structured to provide maximum benefit to your loved ones without delay.',
        icon: BanknotesIcon,
    },
    {
        name: 'Business Succession Planning',
        description: 'For business owners, planning for the future is critical. We work with you to create a succession plan that ensures the smooth transition of your business, protects its value, and provides for your family, whether you plan to pass it to the next generation, sell it, or have it managed by key employees.',
        icon: UserGroupIcon,
    }
]

export default function ServicesPage() {
    return (
        <div className="bg-white dark:bg-primary-900">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-accent-600 tracking-wide uppercase">Services</h2>
                    <p className="mt-1 text-4xl font-extrabold text-primary-900 sm:text-5xl sm:tracking-tight lg:text-6xl dark:text-primary-50">
                        Comprehensive Estate Planning Solutions
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-primary-500 dark:text-primary-300">
                        We offer a full suite of services designed to protect your assets, provide for your family, and secure your legacy.
                    </p>
                </div>

                <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
                    {services.map((service) => (
                        <div key={service.name} className="pt-6">
                            <div className="flow-root bg-primary-50 dark:bg-primary-800 rounded-lg px-6 pb-8">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-accent-500 rounded-md shadow-lg">
                                            <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-primary-900 dark:text-primary-100 tracking-tight">{service.name}</h3>
                                    <p className="mt-5 text-base text-primary-600 dark:text-primary-300">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                     <Link to="/assessment">
                        <Button size="lg" variant="primary">
                            Find Out Which Service You Need &rarr;
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
