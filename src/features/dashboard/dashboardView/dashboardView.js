import React, { useRef } from 'react';
import styles from './dashboardView.module.css';
import BaseView from '../../../components/BaseView/baseView';
import Button from '../../../components/button/Button';
import { useDashboardViewModel } from '../dashboardViewModel';

const DashboardView = () => {
    const {
        campaigns,
        importCSV
    } = useDashboardViewModel();

    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      importCSV(file);
    }
  };

    const totalActiveBudget = campaigns
    .filter(c => c.campaign_status === 'ACTIVE')
    .reduce((sum, c) => {
        const budget = Number(c.campaign_daily_budget);
        return sum + (isNaN(budget) ? 0 : budget);
    }, 0);

    const totalNonActiveBudget = campaigns
    .filter(c => c.campaign_status === 'PAUSED')
    .reduce((sum, c) => {
        const budget = Number(c.campaign_daily_budget);
        return sum + (isNaN(budget) ? 0 : budget);
    }, 0);

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
                        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png"
                        alt="Facebook logo"
                        className="rounded shadow"
                        style={{ width: '150px', height: 'auto' }} // Bạn có thể tùy chỉnh kích thước
                    />
                </div>

                <div className={styles.rightSide}>
                    <div className="space-y-4">
                        <div className={styles.headerWithButton}>
                            <h3 className="text-xl font-semibold">Thông tin tổng quan</h3>
                            <Button
                                onClick={() => {
                                    fileInputRef.current.click()
                                }}
                            >
                                Add Campaign
                            </Button>
                        </div>
                        
                        <input
                            type="file"
                            accept=".csv"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />

                        {/* Phần bảng hiển thị campaigns */}
                        <div className={styles.card}>Số lượng chiến dịch: {campaigns.length}</div>
                        <div className={styles.card}>
                            Ngân sách chiến dịch ACTIVE: ${totalActiveBudget.toLocaleString('vi-VN')}
                        </div>
                        <div className={styles.card}>
                            Ngân sách chiến dịch PAUSE: ${totalNonActiveBudget.toLocaleString('vi-VN')}
                        </div>
                        <div className={styles.card}>Hiệu suất trung bình: 4.2%</div>
                    </div>
                </div>
            </div>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            {/* Thêm cột STT đầu tiên */}
                            <th>{campaigns.length > 0 ? 'STT' : 'Không có campaign nào'}</th>
                            {Array.from(
                                new Set(
                                    campaigns.flatMap((item) => Object.keys(item))
                                )
                            )
                                // Loại bỏ cột id để tránh trùng với STT
                                .filter(key => key !== 'campaign_id' && key !== '_id')
                                .map((key) => (
                                    <th key={key}>
                                        {key
                                            .replace(/_/g, ' ')
                                            .replace(/\b\w/g, (char) => char.toUpperCase())}
                                    </th>
                                ))}
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign, index) => {
                            const allKeys = Array.from(
                                new Set(
                                    campaigns.flatMap((item) => Object.keys(item))
                                )
                            ).filter(key => key !== 'campaign_id' && key !== '_id'); // bỏ cột id

                            return (
                                <tr key={index}>
                                    {/* Cột STT */}
                                    <td>{index + 1}</td>
                                    {/* Các cột còn lại */}
                                    {allKeys.map((key) => {
                                        const value = campaign[key];
                                        return (
                                            <td key={key}>
                                                {value === undefined
                                                    ? ''
                                                    : key === 'budget'
                                                        ? `${Number(value).toLocaleString('vi-VN')}đ`
                                                        : key.includes('date') || key.includes('created_at')
                                                            ? new Date(value).toLocaleDateString('vi-VN')
                                                            : String(value)}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>



        </BaseView>

    );
};

export default DashboardView;