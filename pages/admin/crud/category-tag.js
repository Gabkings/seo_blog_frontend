import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Link from 'next/link';
import Category from '../../../components/crud/category'
import Tag from '../../../components/crud/tag'
const CategoryTag = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="col-md-10 center">Manage Categories</h2>
                             <Category />
                        </div>
                        <div className="vr"></div>

                        <div className="col-md-6">
                            <h2 className="col-md-10 center">Manage Categories</h2>
                            <Tag />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default CategoryTag;
