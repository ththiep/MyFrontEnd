// fileHandler.js
import Papa from 'papaparse';

class FileHandler {
    static toSnakeCase(str) {
        return str
        .trim()
        .replace(/([a-z])([A-Z])/g, '$1_$2') // camelCase → camel_Case
        .replace(/\s+/g, '_') // dấu cách → _
        .replace(/[^\w_]/g, '') // loại bỏ ký tự đặc biệt
        .toLowerCase();
    }
  /**
   * Đọc file CSV và parse thành danh sách object campaign.
   * @param {File} file - File CSV upload từ input.
   * @returns {Promise<Array<Object>>} - Danh sách campaign.
   */
  static parseCSVFile(file) {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true, // Lấy key từ hàng đầu tiên
        skipEmptyLines: true,
        transformHeader: (header) => FileHandler.toSnakeCase(header),
        complete: (results) => {
          if (results.errors.length > 0) {
            console.error('Lỗi khi parse CSV:', results.errors);
            reject(new Error('Lỗi khi đọc file CSV'));
          } else {
            console.log('[Parsed campaigns]', results.data);
            resolve(results.data); // Trả về list campaign
          }
        },
        error: (err) => {
          console.error('Lỗi trong quá trình đọc file:', err);
          reject(err);
        },
      });
    });
  }
}

export default FileHandler;