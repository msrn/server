OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "清除映射失敗",
    "Failed to delete the server configuration" : "刪除伺服器設定時失敗",
    "Valid configuration, connection established!" : "有效的設定，連接成功!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "有效的設定，但是綁定失敗。 請檢查伺服器設定和證書。",
    "Invalid configuration. Please have a look at the logs for further details." : "無效的設定。 請查看日誌以獲取更多詳細訊息。",
    "No action specified" : "沒有指定操作",
    "No configuration specified" : "沒有指定設定",
    "No data specified" : "沒有指定資料",
    " Could not set configuration %s" : "無法設定 %s 為設定值",
    "Action does not exist" : "操作不存在",
    "Renewing …" : "更新中...",
    "Very weak password" : "密碼安全性極弱",
    "Weak password" : "密碼安全性弱",
    "So-so password" : "密碼安全性普通",
    "Good password" : "密碼安全性佳",
    "Strong password" : "密碼安全性極佳",
    "The Base DN appears to be wrong" : "Base DN 出現問題",
    "Testing configuration…" : "設定測試中...",
    "Configuration incorrect" : "設定不正確",
    "Configuration incomplete" : "設定未完成",
    "Configuration OK" : "設定完成",
    "Select groups" : "選擇群組",
    "Select object classes" : "選擇物件",
    "Please check the credentials, they seem to be wrong." : "請檢查您的憑證，似乎出了點問題",
    "Please specify the port, it could not be auto-detected." : "請您指定您的連接阜，無法自動偵測",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Base DN 無法被自動偵測，請重新設定主機，連接阜以及認證",
    "Could not detect Base DN, please enter it manually." : "無法偵測到Base DN，請手動輸入",
    "{nthServer}. Server" : "{nthServer}. 伺服器",
    "No object found in the given Base DN. Please revise." : "在Base DN中找不到物件，請重新修改",
    "More than 1,000 directory entries available." : "目前有超過 1,000 個資料夾項目是可以使用的",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "產生錯誤，請檢查Base DN，以及連線設定和驗證",
    "Do you really want to delete the current Server Configuration?" : "您真的要刪除現在的伺服器設定嗎？",
    "Confirm Deletion" : "確認刪除",
    "Mappings cleared successfully!" : "Mappings清除成功",
    "Error while clearing the mappings." : "清除Mappings發生錯誤",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "匿名是不允許的，請提供使用者DN和密碼",
    "LDAP Operations error. Anonymous bind might not be allowed." : "LDAP 錯誤，不允許匿名榜定",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "存檔失敗，請確認資料庫運作中，請重新讀取一次然後再試一次",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "切換模式會使LDAP自動抓取資訊，抓取資訊的時間依您的LDAP大小而定，可能會花一點時間，您確定要切換模式?",
    "Mode switch" : "模式切換",
    "Select attributes" : "選擇屬性",
    "User found and settings verified." : "使用者存在，設定值正確",
    "An unspecified error occurred. Please check log and settings." : "發生一個不明的錯誤‧請檢查日誌和設定。",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "連線到 LDAP/AD出現錯誤，請檢查主機，連接阜和驗證資訊",
    "Please provide a login name to test against" : "請提供登入姓名以便再次測試",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "群組盒已經停用，LDAP/AD 伺服器並不支援",
    "Please login with the new password" : "請登入並使用新的密碼",
    "Your password will expire tomorrow." : "您的密碼將於明天過期",
    "Your password will expire today." : "您的密碼將於今天過期",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["您的密碼將於%n天後過期"],
    "LDAP / AD integration" : "LDAP /AD 整合",
    "_%s group found_::_%s groups found_" : ["找到 %s 群組"],
    "_%s user found_::_%s users found_" : ["找到 %s 使用者"],
    "Could not find the desired feature" : "無法找到所需的功能",
    "Invalid Host" : "無效的Host",
    "Test Configuration" : "測試此設定",
    "Help" : "說明",
    "Only these object classes:" : "只有這些物件類別：",
    "Only from these groups:" : "只從這些群組:",
    "Search groups" : "搜尋群組",
    "Available groups" : "可用的群組",
    "Selected groups" : "已選擇的群組",
    "Edit LDAP Query" : "編輯LDAP Query",
    "LDAP Filter:" : "LDAP 過慮器:",
    "When logging in, %s will find the user based on the following attributes:" : "當登入%s時，將會根據以下屬性找到使用者 :",
    "LDAP / AD Username:" : "LDAP / AD 使用者名稱:",
    "Allows login against the LDAP / AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "允許使用LDAP / AD使用者登入，該使用者可以是“ uid”或“ sAMAccountName”。",
    "LDAP / AD Email Address:" : "LDAP / AD 電子郵件:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "允許使用電子郵件屬性登入。 允許使用“ mail”和“ mailPrimaryAddress”。",
    "Other Attributes:" : "其他屬性:",
    "Test Loginname" : "測試登入姓名",
    "Verify settings" : "驗證設定",
    "%s. Server:" : "%s. 伺服器:",
    "Add a new configuration" : "建立一個新的設定",
    "Copy current configuration into new directory binding" : "複製目前的設定檔到新目錄",
    "Delete the current configuration" : "刪除目前的設定檔",
    "Host" : "主機",
    "Port" : "連接埠",
    "Detect Port" : "偵測連接阜",
    "User DN" : "User DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "客戶端使用者的DN與特定字詞的連結需要完善，例如:uid=agent,dc=example,dc=com。若是匿名連接，則將DN與密碼欄位留白。",
    "Password" : "密碼",
    "For anonymous access, leave DN and Password empty." : "匿名連接時請將 DN 與密碼欄位留白",
    "Save Credentials" : "保存憑證",
    "One Base DN per line" : "一行一個 Base DN",
    "You can specify Base DN for users and groups in the Advanced tab" : "您可以在進階標籤頁裡面指定使用者及群組的 Base DN",
    "Detect Base DN" : "偵測 Base DN",
    "Test Base DN" : "測試 Base DN",
    "Manually enter LDAP filters (recommended for large directories)" : "手動輸入 LDAP篩選器 (建議在大型的資料環境)",
    "Listing and searching for users is constrained by these criteria:" : "列出和搜索用戶受到以下條件的約束：",
    "The filter specifies which LDAP users shall have access to the %s instance." : "篩選起指定哪些LDAP的使用者應該擁有存取%s的權限",
    "Verify settings and count users" : "驗證設定並計算使用者數",
    "Saving" : "儲存",
    "Back" : "返回",
    "Continue" : "繼續",
    "Please renew your password." : "請更新您的密碼",
    "An internal error occurred." : "發生內部錯誤",
    "Please try again or contact your administrator." : "請重試或聯絡系統管理員",
    "Current password" : "目前密碼",
    "New password" : "新密碼",
    "Renew password" : "更新密碼",
    "Wrong password." : "密碼錯誤",
    "Cancel" : "取消",
    "Server" : "伺服器",
    "Users" : "使用者",
    "Login Attributes" : "登入的設定",
    "Groups" : "群組",
    "Expert" : "專業模式",
    "Advanced" : "進階",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>警告：</b>沒有安裝 PHP LDAP 模組，後端系統將無法運作，請要求您的系統管理員安裝模組。",
    "Connection Settings" : "連線設定",
    "Configuration Active" : "設定使用中",
    "When unchecked, this configuration will be skipped." : "沒有被勾選時，此設定會被略過。",
    "Backup (Replica) Host" : "備用主機",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "可以選擇性設定備用主機，必須是 LDAP/AD 中央伺服器的複本。",
    "Backup (Replica) Port" : "備用（複本）連接埠",
    "Disable Main Server" : "停用主伺服器",
    "Only connect to the replica server." : "只能連線至複製伺服器。",
    "Turn off SSL certificate validation." : "關閉 SSL 憑證檢查",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "不建議，請僅在測試時使用！如果連線只能在此設定下工作，請匯入LDAP伺服器的SSL認證到您的伺服器%s上",
    "Cache Time-To-Live" : "快取的存活時間",
    "in seconds. A change empties the cache." : "以秒為單位。變更後會清空快取。",
    "Directory Settings" : "目錄設定",
    "User Display Name Field" : "使用者顯示名稱欄位",
    "The LDAP attribute to use to generate the user's display name." : "LDAP設定值，用於產生使用者的顯示名稱",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "選填。要加進顯示名稱中括號的 LDAP 屬性。例如 »John Doe (john.doe@example.org)«。",
    "Base User Tree" : "Base User Tree",
    "One User Base DN per line" : "一行一個使用者 Base DN",
    "User Search Attributes" : "User Search Attributes",
    "Optional; one attribute per line" : "非必要，一行一項屬性",
    "Group Display Name Field" : "群組顯示名稱欄位",
    "The LDAP attribute to use to generate the groups's display name." : "LDAP設定值，用於產生使用者群組的顯示名稱",
    "Base Group Tree" : "Base Group Tree",
    "One Group Base DN per line" : "一行一個 Group Base DN",
    "Group Search Attributes" : "Group Search Attributes",
    "Group-Member association" : "Group-Member association",
    "Default password policy DN" : "默認密碼策略DN",
    "Special Attributes" : "特殊屬性",
    "Quota Field" : "配額欄位",
    "Quota Default" : "預設配額",
    "Email Field" : "電郵欄位",
    "User Home Folder Naming Rule" : "使用者家目錄的命名規則",
    "Internal Username" : "內部使用者名稱",
    "Internal Username Attribute:" : "內部使用者名稱屬性:",
    "Override UUID detection" : "偵測覆寫UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "預設情況下，UUID 屬性會自動偵測。UUID 屬性用來準確識別 LDAP 使用者及群組。此外，如果未在上方指定，內部使用者名稱會基於 UUID 建立。您能覆蓋設定並直接指定屬性，但一定要確保指定的屬性能被使用者及群組取得且唯一。留空則執行預設行為。變更只會對新映射 (加入) 的 LDAP 使用者及群組生效。",
    "UUID Attribute for Users:" : "使用者的UUID值:",
    "UUID Attribute for Groups:" : "群組的UUID值:",
    "Clear Groupname-LDAP Group Mapping" : "清除 群組名稱-LDAP 群組映射"
},
"nplurals=1; plural=0;");
