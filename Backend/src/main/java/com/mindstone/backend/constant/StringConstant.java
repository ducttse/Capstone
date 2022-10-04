package com.mindstone.backend.constant;

public class StringConstant {

    public class STATUS {
        public static final String ACTIVE = "ACTIVE";
    }

    public class MESSAGE {
        public class USER {
            public static final String NOT_FOUND = "Không tìm thấy thông tin tài khoản!";
            public static final String WRONG_OLD_PASSWORD = "Mật khẩu cũ không đúng!";
            public static final String CONFIRMPASSWORD_NOT_MATCH_NEWPASSWORD = "Xác nhận mật khẩu không đúng!";
            public static final String DUPLICATED_EMAIL = "Email đã được sử dụng!";

            public static final String CREATE_ACCOUNT_FAILED = "Tạo tài khoản không thành công!";

            public static final String UPDATE_USER_FAILED = "Cập nhật tài khoản không thành công!";

            public static final String SEND_OTP_SUCCESS= "Gửi OTP thành công!";

            public static final String WRONG_OTP= "Mã OTP sai!";

            public static final String UPDATE_PASSWORD_SUCCESS= "Cập nhật mật khẩu thành công!";
        }

        public class WALLET {
            public static final String CREATE_WALLET_FAILED = "Tạo ví không thành công!";
        }

        public class STAFF {
            public static final String UPDATE_STAFF_FAILED = "Cập nhật tài khoản không thành công!";
        }
    }
}
