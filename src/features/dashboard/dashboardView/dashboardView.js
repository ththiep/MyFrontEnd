import styles from './dashboardView.module.css';
// import Button from '../../../components/button/Button';
import BaseView from '../../../components/BaseView/baseView';
import { useDashboardViewModel } from '../dashboardViewModel';

const DashboardView = () => {
    const {
        campaigns,
    } = useDashboardViewModel();

    return (
        <BaseView>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
                    <p className="text-lg mb-6">
                        Chào mừng bạn đến với trang quản lý chiến dịch Facebook.
                        Tại đây bạn có thể theo dõi, phân tích và tối ưu các chiến dịch quảng cáo một cách dễ dàng.
                    </p>
                    <img
                        src="https://source.unsplash.com/500x300/?dashboard,analytics"
                        alt="Dashboard banner"
                        className="rounded shadow"
                    />
                </div>

                <div className={styles.rightSide}>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Thông tin tổng quan</h3>
                        <div className={styles.card}>Số lượng chiến dịch: {campaigns.length}</div>
                        <div className={styles.card}>Ngân sách hiện tại: 25,000,000đ</div>
                        <div className={styles.card}>Hiệu suất trung bình: 4.2%</div>
                    </div>
                </div>
            </div>



            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
                    <p className="text-lg mb-6">
                        Chào mừng bạn đến với trang quản lý chiến dịch Facebook.
                        Tại đây bạn có thể theo dõi, phân tích và tối ưu các chiến dịch quảng cáo một cách dễ dàng.
                    </p>
                    <img
                        src="https://source.unsplash.com/500x300/?dashboard,analytics"
                        alt="Dashboard banner"
                        className="rounded shadow"
                    />
                </div>

                <div className={styles.rightSide}>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Thông tin tổng quan</h3>
                        <div className={styles.card}>Số lượng chiến dịch: {campaigns.length}</div>
                        <div className={styles.card}>Ngân sách hiện tại: 25,000,000đ</div>
                        <div className={styles.card}>Hiệu suất trung bình: 4.2%</div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
                    <p className="text-lg mb-6">
                        Chào mừng bạn đến với trang quản lý chiến dịch Facebook.
                        Tại đây bạn có thể theo dõi, phân tích và tối ưu các chiến dịch quảng cáo một cách dễ dàng.
                    </p>
                    <img
                        src="https://source.unsplash.com/500x300/?dashboard,analytics"
                        alt="Dashboard banner"
                        className="rounded shadow"
                    />
                </div>

                <div className={styles.rightSide}>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Thông tin tổng quan</h3>
                        <div className={styles.card}>Số lượng chiến dịch: {campaigns.length}</div>
                        <div className={styles.card}>Ngân sách hiện tại: 25,000,000đ</div>
                        <div className={styles.card}>Hiệu suất trung bình: 4.2%</div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
                    <p className="text-lg mb-6">
                        Chào mừng bạn đến với trang quản lý chiến dịch Facebook.
                        Tại đây bạn có thể theo dõi, phân tích và tối ưu các chiến dịch quảng cáo một cách dễ dàng.
                    </p>
                    <img
                        src="https://source.unsplash.com/500x300/?dashboard,analytics"
                        alt="Dashboard banner"
                        className="rounded shadow"
                    />
                </div>

                <div className={styles.rightSide}>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Thông tin tổng quan</h3>
                        <div className={styles.card}>Số lượng chiến dịch: {campaigns.length}</div>
                        <div className={styles.card}>Ngân sách hiện tại: 25,000,000đ</div>
                        <div className={styles.card}>Hiệu suất trung bình: 4.2%</div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
                    <p className="text-lg mb-6">
                        Chào mừng bạn đến với trang quản lý chiến dịch Facebook.
                        Tại đây bạn có thể theo dõi, phân tích và tối ưu các chiến dịch quảng cáo một cách dễ dàng.
                    </p>
                    <img
                        src="https://source.unsplash.com/500x300/?dashboard,analytics"
                        alt="Dashboard banner"
                        className="rounded shadow"
                    />
                </div>

                <div className={styles.rightSide}>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Thông tin tổng quan</h3>
                        <div className={styles.card}>Số lượng chiến dịch: {campaigns.length}</div>
                        <div className={styles.card}>Ngân sách hiện tại: 25,000,000đ</div>
                        <div className={styles.card}>Hiệu suất trung bình: 4.2%</div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
                    <p className="text-lg mb-6">
                        Chào mừng bạn đến với trang quản lý chiến dịch Facebook.
                        Tại đây bạn có thể theo dõi, phân tích và tối ưu các chiến dịch quảng cáo một cách dễ dàng.
                    </p>
                    <img
                        src="https://source.unsplash.com/500x300/?dashboard,analytics"
                        alt="Dashboard banner"
                        className="rounded shadow"
                    />
                </div>

                <div className={styles.rightSide}>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Thông tin tổng quan</h3>
                        <div className={styles.card}>Số lượng chiến dịch: {campaigns.length}</div>
                        <div className={styles.card}>Ngân sách hiện tại: 25,000,000đ</div>
                        <div className={styles.card}>Hiệu suất trung bình: 4.2%</div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
                    <p className="text-lg mb-6">
                        Chào mừng bạn đến với trang quản lý chiến dịch Facebook.
                        Tại đây bạn có thể theo dõi, phân tích và tối ưu các chiến dịch quảng cáo một cách dễ dàng.
                    </p>
                    <img
                        src="https://source.unsplash.com/500x300/?dashboard,analytics"
                        alt="Dashboard banner"
                        className="rounded shadow"
                    />
                </div>

                <div className={styles.rightSide}>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Thông tin tổng quan</h3>
                        <div className={styles.card}>Số lượng chiến dịch: {campaigns.length}</div>
                        <div className={styles.card}>Ngân sách hiện tại: 25,000,000đ</div>
                        <div className={styles.card}>Hiệu suất trung bình: 4.2%</div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
                    <p className="text-lg mb-6">
                        Chào mừng bạn đến với trang quản lý chiến dịch Facebook.
                        Tại đây bạn có thể theo dõi, phân tích và tối ưu các chiến dịch quảng cáo một cách dễ dàng.
                    </p>
                    <img
                        src="https://source.unsplash.com/500x300/?dashboard,analytics"
                        alt="Dashboard banner"
                        className="rounded shadow"
                    />
                </div>

                <div className={styles.rightSide}>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Thông tin tổng quan</h3>
                        <div className={styles.card}>Số lượng chiến dịch: {campaigns.length}</div>
                        <div className={styles.card}>Ngân sách hiện tại: 25,000,000đ</div>
                        <div className={styles.card}>Hiệu suất trung bình: 4.2%</div>
                    </div>
                </div>
            </div>



        </BaseView>

    );
};

export default DashboardView;