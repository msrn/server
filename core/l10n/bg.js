OC.L10N.register(
    "core",
    {
    "Please select a file." : "Моля изберете файл.",
    "File is too big" : "Файлът е твърде голям",
    "The selected file is not an image." : "Избраният файл не е изображение.",
    "The selected file cannot be read." : "Избраният файл не може да бъде отворен.",
    "Invalid file provided" : "Предоставен е невалиден файл",
    "No image or file provided" : "Не бяха доставени картинка или файл",
    "Unknown filetype" : "Неизвестен тип файл",
    "Invalid image" : "Невалидно изображение",
    "An error occurred. Please contact your admin." : "Възникна неизвестна грешка. Свържете с администратора.",
    "No temporary profile picture available, try again" : "Не е налична временна профилна снимка, опитайте отново",
    "No crop data provided" : "Липсват данни за изрязването",
    "No valid crop data provided" : "Данни за изрязването са невалидни",
    "Crop is not square" : "Областта не е квадратна",
    "Password reset is disabled" : "Възстановяването на пароли е забранено",
    "Couldn't reset password because the token is invalid" : "Възстановяването на паролата е невъзможно, защото връзката за удостоверение е невалидна",
    "Couldn't reset password because the token is expired" : "Възстановяването на паролата е невъзможно, защото връзката за удостоверение е с изтекла валидност",
    "Password reset" : "Възстановяване на парола",
    "Click the following button to reset your password. If you have not requested the password reset, then ignore this email." : "Кликнете върху следния бутон, за да възстановите паролата си. Ако не сте поискали възстановяване на паролата, игнорирайте този имейл.",
    "Click the following link to reset your password. If you have not requested the password reset, then ignore this email." : "Кликнете върху следната връзка, за да възстановите паролата си. Ако не сте поискали възстановяване на паролата, игнорирайте този имейл.",
    "Reset your password" : "Възстановяване на вашата парола",
    "Nextcloud Server" : "Nextcloud сървър",
    "Preparing update" : "Подготовка за актуализиране",
    "[%d / %d]: %s" : "[%d / %d]: %s",
    "Please use the command line updater because automatic updating is disabled in the config.php." : "Моля използвайте съветникът за актуализиране в командния ред, защото автоматичният е забранен в config.php.",
    "[%d / %d]: Checking table %s" : "[%d / %d]: Проверяване на таблица %s",
    "Turned on maintenance mode" : "Режимът за поддръжка е включен",
    "Turned off maintenance mode" : "Режимът за поддръжка е изключен",
    "Maintenance mode is kept active" : "Режим на поддръжка се поддържа активен",
    "Updating database schema" : "Актуализиране схемата на базата данни",
    "Updated database" : "Базата данни е актуализирана",
    "Checking whether the database schema can be updated (this can take a long time depending on the database size)" : "Проверка дали схемата на базата данни може да се актуализира (възможно е да отнеме повече време в зависимост от големината на базата данни)",
    "Checked database schema update" : "Обновяването на схемата на базата данни е проверено",
    "Checking updates of apps" : "Проверка за актуализации на приложенията",
    "Checking for update of app \"%s\" in appstore" : "Проверка за актуализация на \"%s\"",
    "Update app \"%s\" from appstore" : "Актуализиране на \"%s\"",
    "Checking whether the database schema for %s can be updated (this can take a long time depending on the database size)" : "Проверка дали схемата на базата данни %s може да бъде актуализирана (това може да отнеме повече време в зависимост от големината на базата данни)",
    "Checked database schema update for apps" : "Обновяването на схемата на базата данни за приложения е проверено",
    "Set log level to debug" : "Промени ниво на лог на дебъг",
    "Reset log level" : "Възстанови ниво на лог",
    "Starting code integrity check" : "Стартиране на проверка за цялостта на кода",
    "Finished code integrity check" : "Приключена проверка за цялостта на кода",
    "%s (incompatible)" : "%s (несъвместим)",
    "Already up to date" : "Актуално",
    "Last background job execution ran {relativeTime}. Something seems wrong." : "За последно задача е стартирала {relativeTime}. Изглежда, че има проблем.",
    "You are currently running PHP {version}. Upgrade your PHP version to take advantage of <a target=\"_blank\" rel=\"noreferrer noopener\" href=\"{phpLink}\">performance and security updates provided by the PHP Group</a> as soon as your distribution supports it." : "В момента използвате PHP {version}. Актуализирайте версията на PHP за да се възползвате от <a target=\"_blank\" rel=\"noreferrer noopener\" href=\"{phpLink}\">подобренията в производителността и сигурността, предоставени от PHP Group</a> колкото можете по-скоро.",
    "The PHP OPcache is not properly configured. <a target=\"_blank\" rel=\"noreferrer noopener\" href=\"{docLink}\">For better performance it is recommended</a> to use the following settings in the <code>php.ini</code>:" : "Модула PHP OPcache не е настроен правилно. <a target=\"_blank\" rel=\"noreferrer noopener\" href=\"{docLink}\">За по-добра производителност е препоръчително</a> да ползвате следните настройки във файла <code>php.ini</code>:",
    "The database is missing some indexes. Due to the fact that adding indexes on big tables could take some time they were not added automatically. By running \"occ db:add-missing-indices\" those missing indexes could be added manually while the instance keeps running. Once the indexes are added queries to those tables are usually much faster." : "Някои индекси липсват в базата данни. Не са добавени защото процеса може да отнеме доста време. Можете да стартирате процеса ръчно като изпълните командата \"occ db:add-missing-indices\". След добавянето на индексите заявките към изброените таблици ще минават много по-бързо.",
    "Some columns in the database are missing a conversion to big int. Due to the fact that changing column types on big tables could take some time they were not changed automatically. By running 'occ db:convert-filecache-bigint' those pending changes could be applied manually. This operation needs to be made while the instance is offline. For further details read <a target=\"_blank\" rel=\"noreferrer noopener\" href=\"{docLink}\">the documentation page about this</a>." : "Някои колони от базата данни не са конвертирани към \"big int\". Конвертирането не е осъществено защото може да отнеме доста време. Можете да стартирате процеса ръчно като изпълните командата \"occ db:convert-filecache-bigint\". Но преди това инсталацията трябва да бъде в \"maintenance\" режим. За допълнителна информация <a target=\"_blank\" rel=\"noreferrer noopener\" href=\"{docLink}\">прочетете документацията</a>.",
    "This is particularly recommended when using the desktop client for file synchronisation." : "Препоръчително, особено ако ползвате клиента за настолен компютър.",
    "Error occurred while checking server setup" : "Възникна грешка при проверката на настройките на сървъра",
    "unknown text" : "непознат текст",
    "Hello world!" : "Здравей Свят!",
    "sunny" : "слънчево",
    "Hello {name}, the weather is {weather}" : "Здравейте {name}, времето е {weather}",
    "Hello {name}" : "Здравейте, {name}",
    "new" : "нов",
    "_download %n file_::_download %n files_" : ["изтегли %n файл","изтегли %n файла"],
    "The update is in progress, leaving this page might interrupt the process in some environments." : "Актуализирането е в процес, в някой среди - напускането на тази страница може да прекъсне процеса.",
    "Update to {version}" : "Актуализирай до {version}",
    "An error occurred." : "Възникна грешка.",
    "Please reload the page." : "Моля, презаредете страницата.",
    "The update was unsuccessful. For more information <a href=\"{url}\">check our forum post</a> covering this issue." : "Актуализацията беше неуспешна. За допълнителна информация <a href=\"{url}\">прегледайте темата</a> относно този проблем.",
    "The update was unsuccessful. Please report this issue to the <a href=\"https://github.com/nextcloud/server/issues\" target=\"_blank\">Nextcloud community</a>." : "Актуализирането беше неуспешно. Моля отнесете този проблем към <a href=\"https://github.com/nextcloud/server/issues\" target=\"_blank\"> Nextcloud общността</a>.",
    "Continue to Nextcloud" : "Продължете към Nextcloud",
    "Log in" : "Вписване",
    "Logging in …" : "Вписване ...",
    "Server side authentication failed!" : "Неуспешно удостоверяването от страна на сървъра!",
    "Please contact your administrator." : "Моля, свържете се с администратора.",
    "An internal error occurred." : "Възникна вътрешно сървърна грешка.",
    "Please try again or contact your administrator." : "Опитайте отново или се свържете с администраотра.",
    "Username or email" : "Потребител или имейл",
    "Password" : "Парола",
    "Wrong username or password." : "Грешен потребител или парола",
    "User disabled" : "Потребителят е деактивиран",
    "Reset password" : "Възстановяване на паролата",
    "Couldn't send reset email. Please contact your administrator." : "Неуспешно изпращане на имейл за възстановяване на паролата. Моля, свържете се с вашия администратор.",
    "Password can not be changed. Please contact your administrator." : "Паролата не може да бъде промена. Моля, свържете се с администратора.",
    "Back to login" : "Обратно към вписване",
    "New password" : "Нова парола",
    "I know what I'm doing" : "Знам какво правя",
    "Resetting password" : "Възстановяване на паролата",
    "Cancel" : "Отказ",
    "Forgot password?" : "Забравена парола?",
    "Back" : "Назад",
    "Reset search" : "Рестартирай търсенето",
    "Settings" : "Настройки",
    "Could not load your contacts" : "Контактите не могат да бъдат заредени",
    "Search contacts …" : "Търсене в контактите ...",
    "No contacts found" : "Няма намерени контакти",
    "Show all contacts …" : "Покажи всички контакти ...",
    "Loading your contacts …" : "Зареждане на контактите ...",
    "No" : "Не",
    "Yes" : "Да",
    "No files in here" : "Няма файлове",
    "New folder" : "Нова папка",
    "No more subfolders in here" : "Няма подпапки",
    "Name" : "Име",
    "Size" : "Размер",
    "Modified" : "Промяна",
    "\"{name}\" is an invalid file name." : "\"{name}\" е непозволено име за файл.",
    "File name cannot be empty." : "Името на файла не може да бъде празно.",
    "\"/\" is not allowed inside a file name." : "\"/\" е непозволен знак в името на файла.",
    "\"{name}\" is not an allowed filetype" : "\"{name}\" не е разрешен тип файл",
    "{newName} already exists" : "{newName} вече съществува",
    "Choose" : "Избор",
    "Copy" : "Копирай",
    "Move" : "Премести",
    "Error loading file picker template: {error}" : "Грешка при зареждането на шаблона за избор на файл: {error}",
    "OK" : "Добре",
    "Error loading message template: {error}" : "Грешка при зареждането на шаблона за съобщения: {error}",
    "read-only" : "Само за четене",
    "_{count} file conflict_::_{count} file conflicts_" : ["{count} файлов конфликт","{count} файлови кофликта"],
    "One file conflict" : "Един файлов конфликт",
    "New Files" : "Нови файлове",
    "Already existing files" : "Вече съществуващи файлове",
    "Which files do you want to keep?" : "Кои файлове желете да запазите?",
    "If you select both versions, the copied file will have a number added to its name." : "Ако изберете и двете версии, към името на копирания файл ще бъде добавено число.",
    "Continue" : "Продължаване",
    "(all selected)" : "(всички избрани)",
    "({count} selected)" : "({count} избрани)",
    "Error loading file exists template" : "Грешка при зареждането на шаблона за вече съществуващ файл",
    "Pending" : "Чакащо",
    "Copy to {folder}" : "Копирай в {folder}",
    "Move to {folder}" : "Премести в {folder}",
    "Saving …" : "Записване …",
    "Authentication required" : "Изисква удостоверяване",
    "This action requires you to confirm your password" : "Необходимо е да потвърдите паролата си",
    "Confirm" : "Потвърди",
    "Failed to authenticate, try again" : "Грешка при удостоверяване, опитайте пак",
    "seconds ago" : "преди секунди",
    "Connection to server lost" : "Няма връзка със сървъра",
    "_Problem loading page, reloading in %n second_::_Problem loading page, reloading in %n seconds_" : ["Проблем при зареждането на страницата, презареждане след %n секунда","Проблем при зареждането на страницата, презареждане след %n секунди"],
    "Hide details" : "Скриване на подробностите",
    "New in" : "Ново в",
    "View changelog" : "Преглед на списъка с промени",
    "Very weak password" : "Много проста парола",
    "Weak password" : "Проста парола",
    "So-so password" : "Не особено добра парола",
    "Good password" : "Добра парола",
    "Strong password" : "Сложна парола",
    "No action available" : "Няма налични действия",
    "Non-existing tag #{tag}" : "Несъществуващ етикет #{tag}",
    "restricted" : "ограничен",
    "invisible" : "невидим",
    "Delete" : "Изтрий",
    "Rename" : "Преименувай",
    "Collaborative tags" : "Съвместни етикети",
    "No tags found" : "Не са открити етикети",
    "Personal" : "Лични",
    "Users" : "Потребители",
    "Apps" : "Приложения",
    "Admin" : "Админ",
    "Help" : "Помощ",
    "Access forbidden" : "Достъпът е забранен",
    "File not found" : "Файлът не е открит",
    "Error" : "Грешка",
    "Internal Server Error" : "Вътрешно сървърна грешка",
    "The server was unable to complete your request." : "Сървърът не можа да изпълни заявката ви.",
    "If this happens again, please send the technical details below to the server administrator." : "Ако грешката се повтори, моля изпратете техническите данни на администратора.",
    "More details can be found in the server log." : "Подробности можете да намерите в журнала на сървъра.",
    "Technical details" : "Технически данни",
    "Remote Address: %s" : "Отдалечен адрес: %s",
    "Request ID: %s" : "ID на заявката: %s",
    "Type: %s" : "Тип: %s",
    "Code: %s" : "Код: %s",
    "Message: %s" : "Съобщение: %s",
    "File: %s" : "Файл: %s",
    "Line: %s" : "Ред: %s",
    "Trace" : "Проследяване на грешките",
    "Security warning" : "Предупреждение за сигурност",
    "Your data directory and files are probably accessible from the internet because the .htaccess file does not work." : "Директория с данни и файлове ви са вероятно са достъпни от Интернет, защото файлът \".htaccess\" не функционира.",
    "For information how to properly configure your server, please see the <a href=\"%s\" target=\"_blank\" rel=\"noreferrer noopener\">documentation</a>." : "Информация, как да настроите сървъра коректно, ще намерите в <a href=\"%s\" target=\"_blank\" rel=\"noreferrer noopener\">документацията</a>.",
    "Create an <strong>admin account</strong>" : "Създаване на <strong>администраторски профил</strong>.",
    "Username" : "Потребител",
    "Show password" : "Покажи парола",
    "Storage & database" : "Хранилища и бази данни",
    "Data folder" : "Директория за данни",
    "Configure the database" : "Конфигуриране на базата данни",
    "Only %s is available." : "Само %s е наличен.",
    "Install and activate additional PHP modules to choose other database types." : "Инсталирайте и активирайте допълнителни PHP модули, за да изберете други видове бази данни.",
    "For more details check out the documentation." : "За повече информация проверете документацията.",
    "Database user" : "Потребител за базата данни",
    "Database password" : "Парола за базата данни",
    "Database name" : "Име на базата данни",
    "Database tablespace" : "Tablespace на базата данни",
    "Database host" : "Хост",
    "Performance warning" : "Предупреждение за производителността",
    "Finish setup" : "Завършване на инсталацията",
    "Finishing …" : "Завършване...",
    "Need help?" : "Нуждаете се от помощ?",
    "See the documentation" : "Прегледайте документацията",
    "This application requires JavaScript for correct operation. Please {linkstart}enable JavaScript{linkend} and reload the page." : "Приложението изисква JavaScript. Моля, {linkstart}включете JavaScript{linkend} и презаредете страницата.",
    "More apps" : "Още приложения",
    "More" : "Още",
    "Contacts" : "Контакти",
    "Contacts menu" : "Контакти",
    "Settings menu" : "Настройки",
    "Confirm your password" : "Потвърдете паролата си",
    "Connect to your account" : "Свързване към вашия профил",
    "Please log in before granting %1$s access to your %2$s account." : "Необходимо е да се впишете, преди да дадете достъп на %1$s до вашия %2$s профил.",
    "App token" : "Парола за приложението",
    "Grant access" : "Разреши достъпa",
    "Alternative log in using app token" : "Алтернативен метод за вписване с парола за приложение",
    "Account access" : "Достъп до профил",
    "You are about to grant %1$s access to your %2$s account." : "Ще разрешите на %1$s да ползва вашия %2$s профил.",
    "You can close this window." : "Можеш да затвориш този прозорец.",
    "This share is password-protected" : "Тази зона е защитена с парола.",
    "The password is wrong. Try again." : "Паролата е грешна. Опитайте отново.",
    "Two-factor authentication" : "Двустепенно удостоверяване",
    "Set up two-factor authentication" : "Двустепенно удостоверяване",
    "Use backup code" : "Използвай код за възстановяване",
    "Cancel login" : "Откажи вписване",
    "Setup two-factor authentication" : "Свържи двустепенно удостоверяване",
    "Error while validating your second factor" : "Грешка при валидиране на втория ви фактор",
    "Access through untrusted domain" : "Достъп през недоверен домейн",
    "Please contact your administrator. If you are an administrator, edit the \"trusted_domains\" setting in config/config.php like the example in config.sample.php." : "Моля, свържете се с администратора. Ако сте администратор на текущата инстанция, конфигурирайте \"trusted_domains\" настройките в config/config.php. Примерна конфигурация е предоставена в config/config.sample.php.",
    "App update required" : "Изисква се актуализиране на приложението",
    "These incompatible apps will be disabled:" : "Следните несъвместими добавки ще бъдат деактивирани:",
    "The theme %s has been disabled." : "Темата %s е изключена.",
    "Please make sure that the database, the config folder and the data folder have been backed up before proceeding." : "Моля, уверете се, че сте направили копия на базата данни, папките с настройки и данните, преди да продължите.",
    "Start update" : "Начало на обновяването",
    "To avoid timeouts with larger installations, you can instead run the following command from your installation directory:" : "За да избегнеш таймаутове при по-големи инсталации, можеш да изпълниш следните команди в инсталанционната директория:",
    "Detailed logs" : "Подробни журнали",
    "Update needed" : "Нужно е актуализиране",
    "For help, see the  <a target=\"_blank\" rel=\"noreferrer noopener\" href=\"%s\">documentation</a>." : "За помощ, прегледайте <a target=\"_blank\" rel=\"noreferrer\" href=\"%s\">документацията</a>.",
    "Upgrade via web on my own risk" : "Актуализиране чрез интернет на собствен риск",
    "Maintenance mode" : "Режим на поддръжка",
    "This %s instance is currently in maintenance mode, which may take a while." : "В момента се извършва профилактика на %s, може да продължи дълго.",
    "This page will refresh itself when the instance is available again." : "Страницата ще се зареди автоматично, когато е отново на линия.",
    "Contact your system administrator if this message persists or appeared unexpectedly." : "Свържете се със системния администратор ако това съобщение се задържи твърде дълго или се е появило неочаквано.",
    "Following apps have been disabled: %s" : "Следните приложения са изключени: %s",
    "Searching other places" : "Търсене на друго място",
    "_{count} search result in another folder_::_{count} search results in other folders_" : ["{count} търсен резултат в друга папка","{count} търсени резултати в други папки"],
    "Search" : "Търсене",
    "These apps will be updated:" : "Следните добавки ще бъдат актуализирани:"
},
"nplurals=2; plural=(n != 1);");
