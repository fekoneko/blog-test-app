import { Languages } from '../scripts/interfaces';

export interface LangDataInterface {
  SiteName: string;
  SearchBar_label: string;
  SearchBar_placeholder: string;
  Nav_home: string;
  Nav_createPost: string;
  Nav_about: string;
  Footer_text: string;
  Footer_languageTooltip: string;
  Footer_themeTooltip: string;
  Home_title: string;
  Home_header: string;
  Search_title: string;
  CreatePost_title: string;
  CreatePost_header: string;
  EditPost_title: string;
  EditPost_header: string;
  About_title: string;
  Missing_title: string;
  Missing_header: string;
  Post_editTooltip: string;
  Post_deleteTooltip: string;
  Post_EditedCaption: string;
  EditPostForm_titleLabel: string;
  EditPostForm_titlePlaceholder: string;
  EditPostForm_authorLabel: string;
  EditPostForm_authorPlaceholder: string;
  EditPostForm_contentLabel: string;
  EditPostForm_contentPlaceholder: string;
  EditPostForm_submit: string;
  LogInModal_title: string;
  LogInModal_header: string;
  LogInModal_tip: string;
  LogInModal_tipAction: string;
  SignUpModal_title: string;
  SignUpModal_header: string;
  SignUpModal_tip: string;
  SignUpModal_tipAction: string;
  LogInForm_usernameLabel: string;
  LogInForm_usernamePlaceholder: string;
  LogInForm_usernameHint: string;
  LogInForm_passwordLabel: string;
  LogInForm_passwordPlaceholder: string;
  LogInForm_passwordHint: string;
  LogInForm_submit: string;
  RegistrationForm_usernameLabel: string;
  RegistrationForm_usernamePlaceholder: string;
  RegistrationForm_usernameHint: string;
  RegistrationForm_passwordLabel: string;
  RegistrationForm_passwordPlaceholder: string;
  RegistrationForm_passwordHint: string;
  RegistrationForm_confirmLabel: string;
  RegistrationForm_confirmPlaceholder: string;
  RegistrationForm_confirmHint: string;
  RegistrationForm_submit: string;
  exclamationMarkName: string;
  atMarkName: string;
  hashtagName: string;
  dollarSignName: string;
  percentName: string;
  namePrefix: string;
  nameSuffix: string;
  language: string;
}

export const langMap: Map<Languages, LangDataInterface> = new Map();

langMap.set(Languages.eng, {
  SiteName: 'fekoneko blog',
  SearchBar_label: 'Search:',
  SearchBar_placeholder: 'Search',
  Nav_home: 'Home',
  Nav_createPost: 'Create Post',
  Nav_about: 'About',
  Footer_text: 'fekoneko, 2023',
  Footer_languageTooltip: 'Change language',
  Footer_themeTooltip: 'Change theme',
  Home_title: 'Homepage',
  Home_header: 'Homepage',
  Search_title: 'Search',
  CreatePost_title: 'Create Post',
  CreatePost_header: 'Create Post',
  EditPost_title: 'Edit Post',
  EditPost_header: 'Edit Post',
  About_title: 'About',
  Missing_title: 'Page not found',
  Missing_header: 'Page not found',
  Post_editTooltip: 'Edit',
  Post_deleteTooltip: 'Delete',
  Post_EditedCaption: 'edited',
  EditPostForm_titleLabel: 'Title:',
  EditPostForm_titlePlaceholder: 'What is your post about?',
  EditPostForm_authorLabel: 'Author:',
  EditPostForm_authorPlaceholder: 'Leave your name here.',
  EditPostForm_contentLabel: 'Post Body:',
  EditPostForm_contentPlaceholder: 'Start writing here…',
  EditPostForm_submit: 'Upload Post',
  LogInModal_title: 'Log In',
  LogInModal_header: 'Log In',
  LogInModal_tip: "Don't have an account yet?",
  LogInModal_tipAction: 'Sign up.',
  SignUpModal_title: 'Sign Up',
  SignUpModal_header: 'Sign Up',
  SignUpModal_tip: 'Already have an account?',
  SignUpModal_tipAction: 'Log in.',
  LogInForm_usernameLabel: 'Username:',
  LogInForm_usernamePlaceholder: 'Enter the username…',
  LogInForm_usernameHint: "This username doesn't exist!",
  LogInForm_passwordLabel: 'Password:',
  LogInForm_passwordPlaceholder: 'Enter your password…',
  LogInForm_passwordHint: 'Password is incorrect!',
  LogInForm_submit: 'Log In',
  RegistrationForm_usernameLabel: 'Username:',
  RegistrationForm_usernamePlaceholder: 'Come up with the username…',
  RegistrationForm_usernameHint:
    '4 to 24 characters. Must begin with a letter. Letters, numbers, hyphens and underscores are allowed',
  RegistrationForm_passwordLabel: 'Password:',
  RegistrationForm_passwordPlaceholder: 'Choose password…',
  RegistrationForm_passwordHint:
    '8 to 24 characters. Must include uppercase and lowercase letters, a number and a special character. Allowed special characters:',
  RegistrationForm_confirmLabel: 'Confirm password:',
  RegistrationForm_confirmPlaceholder: 'Enter password once again…',
  RegistrationForm_confirmHint: "Passwords don't match!",
  RegistrationForm_submit: 'Sign Up',
  exclamationMarkName: 'exclamation mark',
  atMarkName: 'at mark',
  hashtagName: 'hashtag',
  dollarSignName: 'dollar sign',
  percentName: 'percent',
  namePrefix: '',
  nameSuffix: '',
  language: 'eng',
});

langMap.set(Languages.rus, {
  SiteName: 'fekoneko blog',
  SearchBar_label: 'Поиск:',
  SearchBar_placeholder: 'Поиск',
  Nav_home: 'Главная',
  Nav_createPost: 'Новая запись',
  Nav_about: 'О сайте',
  Footer_text: 'fekoneko, 2023',
  Footer_languageTooltip: 'Сменить язык',
  Footer_themeTooltip: 'Сменить тему',
  Home_title: 'Главная',
  Home_header: 'Главная',
  Search_title: 'Поиск',
  CreatePost_title: 'Создание записи',
  CreatePost_header: 'Создание записи',
  EditPost_title: 'Редактирование записи',
  EditPost_header: 'Редактирование записи',
  About_title: 'О сайте',
  Missing_title: 'Страница не найдена',
  Missing_header: 'Страница не найдена',
  Post_editTooltip: 'Редактировать',
  Post_deleteTooltip: 'Удалить',
  Post_EditedCaption: 'ред.',
  EditPostForm_titleLabel: 'Название:',
  EditPostForm_titlePlaceholder: 'Про что вы хотите написать?',
  EditPostForm_authorLabel: 'Автор',
  EditPostForm_authorPlaceholder: 'Введите своё имя.',
  EditPostForm_contentLabel: 'Содержание:',
  EditPostForm_contentPlaceholder: 'Начните писать здесь…',
  EditPostForm_submit: 'Опубликовать',
  LogInModal_title: 'Вход',
  LogInModal_header: 'Вход',
  LogInModal_tip: 'Ещё нет аккаунта?',
  LogInModal_tipAction: 'Зарегистрируйтесь.',
  SignUpModal_title: 'Регистрация',
  SignUpModal_header: 'Регистрация',
  SignUpModal_tip: 'Уже есть аккаунт?',
  SignUpModal_tipAction: 'Войдите.',
  LogInForm_usernameLabel: 'Логин:',
  LogInForm_usernamePlaceholder: 'Введите имя пользователя…',
  LogInForm_usernameHint: 'Такого пользователя не существует!',
  LogInForm_passwordLabel: 'Пароль:',
  LogInForm_passwordPlaceholder: 'Введите пароль…',
  LogInForm_passwordHint: 'Пароль введён неверно!',
  LogInForm_submit: 'Войти',
  RegistrationForm_usernameLabel: 'Логин:',
  RegistrationForm_usernamePlaceholder: 'Придумайте имя пользователя…',
  RegistrationForm_usernameHint:
    'От 4 до 24 символов. Должен начинаться с буквы. Разрешены латинские буквы, цифры, дефисы и нижние подчёркивания.',
  RegistrationForm_passwordLabel: 'Пароль:',
  RegistrationForm_passwordPlaceholder: 'Придумайте пароль…',
  RegistrationForm_passwordHint:
    'От 8 до 24 символов. Должен включать заглавные и строчные латинские буквы, цифры и специальные символы. Разрешённые символы:',
  RegistrationForm_confirmLabel: 'Подтвердите пароль:',
  RegistrationForm_confirmPlaceholder: 'Введите пароль ещё раз…',
  RegistrationForm_confirmHint: 'Пароли не совпадают!',
  RegistrationForm_submit: 'Зарегистрироваться',
  exclamationMarkName: 'восклицательный знак',
  atMarkName: 'собака',
  hashtagName: 'решётка',
  dollarSignName: 'знак доллара',
  percentName: 'процент',
  namePrefix: '',
  nameSuffix: '',
  language: 'рус',
});

langMap.set(Languages.jap, {
  SiteName: 'fekoneko blog',
  SearchBar_label: '検索：',
  SearchBar_placeholder: '検索',
  Nav_home: 'ホーム',
  Nav_createPost: 'ポストを投稿',
  Nav_about: '情報',
  Footer_text: 'fekoneko, 2023',
  Footer_languageTooltip: '言語を変更',
  Footer_themeTooltip: 'テーマを変更',
  Home_title: 'ホーム',
  Home_header: 'ホーム',
  Search_title: '検索',
  CreatePost_title: 'ポストを投稿',
  CreatePost_header: 'ポストを投稿',
  EditPost_title: 'ポストを編集',
  EditPost_header: 'ポストを編集',
  About_title: '情報',
  Missing_title: 'ページが見つかりません',
  Missing_header: 'ページが見つかりません',
  Post_editTooltip: '編集',
  Post_deleteTooltip: '削除',
  Post_EditedCaption: '編集',
  EditPostForm_titleLabel: '題：',
  EditPostForm_titlePlaceholder: 'ポストは何ですか？',
  EditPostForm_authorLabel: '投稿者：',
  EditPostForm_authorPlaceholder: 'あなたの名前を入力してください。',
  EditPostForm_contentLabel: '本文:',
  EditPostForm_contentPlaceholder: 'ここに書き始めてください…',
  EditPostForm_submit: '投稿する',
  LogInModal_title: 'ログイン',
  LogInModal_header: 'ログイン',
  LogInModal_tip: 'まだアカウントがありませんか？',
  LogInModal_tipAction: 'ユーザー登録',
  SignUpModal_title: 'ユーザー登録',
  SignUpModal_header: 'ユーザー登録',
  SignUpModal_tip: 'もうアカウントがありすか？',
  SignUpModal_tipAction: 'ログイン',
  LogInForm_usernameLabel: 'ユーザー名：',
  LogInForm_usernamePlaceholder: 'ユーザー名を入力…',
  LogInForm_usernameHint: 'ユーザー名が間違っています！',
  LogInForm_passwordLabel: 'パスワード：',
  LogInForm_passwordPlaceholder: 'パスワードを入力…',
  LogInForm_passwordHint: 'パスワードが間違っています！',
  LogInForm_submit: 'ログイン',
  RegistrationForm_usernameLabel: 'ユーザー名：',
  RegistrationForm_usernamePlaceholder: 'ユーザー名を思いついてください…',
  RegistrationForm_usernameHint:
    '4 ～ 24 キャラクター。ラテン文字で始める必要があります。ラテン文字、数字、ハウフン、下線 を使用できます。',
  RegistrationForm_passwordLabel: 'パスワード：',
  RegistrationForm_passwordPlaceholder: 'パスワードを思いついてください…',
  RegistrationForm_passwordHint:
    '8 ～ 24 キャラクター。大文字と小文字、数字、特殊文字を含める必要があります。使用できる特殊文字：',
  RegistrationForm_confirmLabel: 'パスワードを確認：',
  RegistrationForm_confirmPlaceholder: 'まだパスワードを入力してください…',
  RegistrationForm_confirmHint: 'パスワードが一致しません！',
  RegistrationForm_submit: '登録する',
  exclamationMarkName: '感嘆符',
  atMarkName: 'アットマーク',
  hashtagName: 'ハッシュタグ',
  dollarSignName: 'ドル記号',
  percentName: 'パーセント',
  namePrefix: '',
  nameSuffix: 'さん',
  language: '日本語',
});
