import { Languages } from '../scripts/interfaces';

export interface LangDataInterface {
  SearchBar_label: string;
  SearchBar_placeholder: string;
  Nav_home: string;
  Nav_createPost: string;
  Nav_about: string;
  Footer_text: string;
  Footer_languageTooltip: string;
  Footer_themeTooltip: string;
  Home_header: string;
  CreatePost_header: string;
  EditPost_header: string;
  Missing_header: string;
  Post_editTooltip: string;
  Post_deleteTooltip: string;
  EditPostForm_titleLabel: string;
  EditPostForm_titlePlaceholder: string;
  EditPostForm_authorLabel: string;
  EditPostForm_authorPlaceholder: string;
  EditPostForm_contentLabel: string;
  EditPostForm_contentPlaceholder: string;
  EditPostForm_submit: string;
  LogInModal_header: string;
  LogInModal_tip: string;
  LogInModal_tipAction: string;
  RegistrationModal_header: string;
  RegistrationModal_tip: string;
  RegistrationModal_tipAction: string;
  LogInForm_usernameLabel: string;
  LogInForm_usernamePlaceholder: string;
  LogInForm_usernameHint: string;
  LogInForm_passwordLabel: string;
  LogInForm_passwordPlaceholder: string;
  LogInForm_passwordHint: string;
  RegisterForm_usernameLabel: string;
  RegisterForm_usernamePlaceholder: string;
  RegisterForm_usernameHint: string;
  RegisterForm_passwordLabel: string;
  RegisterForm_passwordPlaceholder: string;
  RegisterForm_passwordHint: string;
  RegisterForm_confirmLabel: string;
  RegisterForm_confirmPlaceholder: string;
  RegisterForm_confirmHint: string;
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
  SearchBar_label: 'Search:',
  SearchBar_placeholder: 'Search',
  Nav_home: 'Home',
  Nav_createPost: 'Create Post',
  Nav_about: 'About',
  Footer_text: 'fekoneko, 2023',
  Footer_languageTooltip: 'Change language',
  Footer_themeTooltip: 'Change theme',
  Home_header: 'Homepage',
  CreatePost_header: 'Create Post',
  EditPost_header: 'Edit Post',
  Missing_header: 'Page not found',
  Post_editTooltip: 'Edit',
  Post_deleteTooltip: 'Delete',
  EditPostForm_titleLabel: 'Title:',
  EditPostForm_titlePlaceholder: 'What is your post about?',
  EditPostForm_authorLabel: 'Author:',
  EditPostForm_authorPlaceholder: 'Leave your name here.',
  EditPostForm_contentLabel: 'Post Body:',
  EditPostForm_contentPlaceholder: 'Start writing here…',
  EditPostForm_submit: 'Upload Post',
  LogInModal_header: 'Log In',
  LogInModal_tip: "Don't have an account yet?",
  LogInModal_tipAction: 'Register.',
  RegistrationModal_header: 'Registration',
  RegistrationModal_tip: 'Already have an account?',
  RegistrationModal_tipAction: 'Log in.',
  LogInForm_usernameLabel: 'Username:',
  LogInForm_usernamePlaceholder: 'Enter the username…',
  LogInForm_usernameHint: "This username doesn't exist!",
  LogInForm_passwordLabel: 'Password:',
  LogInForm_passwordPlaceholder: 'Enter your password…',
  LogInForm_passwordHint: 'Password is incorrect!',
  RegisterForm_usernameLabel: 'Username:',
  RegisterForm_usernamePlaceholder: 'Come up with the username…',
  RegisterForm_usernameHint:
    '4 to 24 characters. Must begin with a letter. Letters, numbers, hyphens and underscores are allowed',
  RegisterForm_passwordLabel: 'Password:',
  RegisterForm_passwordPlaceholder: 'Choose password…',
  RegisterForm_passwordHint:
    '8 to 24 characters. Must include uppercase and lowercase letters, a number and a special character. Allowed special characters:',
  RegisterForm_confirmLabel: 'Confirm password:',
  RegisterForm_confirmPlaceholder: 'Enter password once again…',
  RegisterForm_confirmHint: "Passwords don't match!",
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
  SearchBar_label: 'Поиск:',
  SearchBar_placeholder: 'Поиск',
  Nav_home: 'Главная',
  Nav_createPost: 'Новая запись',
  Nav_about: 'О сайте',
  Footer_text: 'fekoneko, 2023',
  Footer_languageTooltip: 'Сменить язык',
  Footer_themeTooltip: 'Сменить тему',
  Home_header: 'Главная',
  CreatePost_header: 'Создание записи',
  EditPost_header: 'Редактирование записи',
  Missing_header: 'Страница не найдена',
  Post_editTooltip: 'Редактировать',
  Post_deleteTooltip: 'Удалить',
  EditPostForm_titleLabel: 'Название:',
  EditPostForm_titlePlaceholder: 'Про что вы хотите написать?',
  EditPostForm_authorLabel: 'Автор',
  EditPostForm_authorPlaceholder: 'Введите своё имя.',
  EditPostForm_contentLabel: 'Содержание:',
  EditPostForm_contentPlaceholder: 'Начните писать здесь…',
  EditPostForm_submit: 'Опубликовать',
  LogInModal_header: 'Вход',
  LogInModal_tip: 'Ещё нет аккаунта?',
  LogInModal_tipAction: 'Зарегистрируйтесь.',
  RegistrationModal_header: 'Регистрация',
  RegistrationModal_tip: 'Уже есть аккаунт?',
  RegistrationModal_tipAction: 'Войдите.',
  LogInForm_usernameLabel: 'Логин:',
  LogInForm_usernamePlaceholder: 'Введите имя пользователя…',
  LogInForm_usernameHint: 'Такого пользователя не существует!',
  LogInForm_passwordLabel: 'Пароль:',
  LogInForm_passwordPlaceholder: 'Введите пароль…',
  LogInForm_passwordHint: 'Пароль введён неверно!',
  RegisterForm_usernameLabel: 'Логин:',
  RegisterForm_usernamePlaceholder: 'Придумайте имя пользователя…',
  RegisterForm_usernameHint:
    'От 4 до 24 символов. Должен начинальтя с буквы. Разрешены латинские буквы, цифры, дефисы и нижние подчёркивания.',
  RegisterForm_passwordLabel: 'Пароль:',
  RegisterForm_passwordPlaceholder: 'Придумайте пароль…',
  RegisterForm_passwordHint:
    'От 8 до 24 символов. Должен включать заглавные и строчные латинские буквы, цифры и специальные символы. Разрешённые символы:',
  RegisterForm_confirmLabel: 'Подтвердите пароль:',
  RegisterForm_confirmPlaceholder: 'Введите пароль ещё раз…',
  RegisterForm_confirmHint: 'Пароли не совпадают!',
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
  SearchBar_label: '検索：',
  SearchBar_placeholder: '検索',
  Nav_home: 'ホーム',
  Nav_createPost: 'ポストを投稿',
  Nav_about: '情報',
  Footer_text: 'fekoneko, 2023',
  Footer_languageTooltip: '言語を変更',
  Footer_themeTooltip: 'テーマを変更',
  Home_header: 'ホーム',
  CreatePost_header: 'ポストを投稿',
  EditPost_header: 'ポストを編集',
  Missing_header: 'ページが見つかりません',
  Post_editTooltip: '編集',
  Post_deleteTooltip: '削除',
  EditPostForm_titleLabel: '題：',
  EditPostForm_titlePlaceholder: 'ポストは何ですか？',
  EditPostForm_authorLabel: '投稿者：',
  EditPostForm_authorPlaceholder: 'あなたの名前を入力してください。',
  EditPostForm_contentLabel: '本文:',
  EditPostForm_contentPlaceholder: 'ここに書き始めてください…',
  EditPostForm_submit: '投稿する',
  LogInModal_header: 'ログイン',
  LogInModal_tip: 'まだアカウントがありませんか？',
  LogInModal_tipAction: 'ログイン',
  RegistrationModal_header: 'ユーザー登録',
  RegistrationModal_tip: 'もうアカウントがありすか？',
  RegistrationModal_tipAction: 'ユーザー登録',
  LogInForm_usernameLabel: 'ユーザー名：',
  LogInForm_usernamePlaceholder: 'ユーザー名を入力…',
  LogInForm_usernameHint: 'ユーザー名が間違っています！',
  LogInForm_passwordLabel: 'パスワード：',
  LogInForm_passwordPlaceholder: 'パスワードを入力…',
  LogInForm_passwordHint: 'パスワードが間違っています！',
  RegisterForm_usernameLabel: 'ユーザー名：',
  RegisterForm_usernamePlaceholder: 'ユーザー名を思いついてください…',
  RegisterForm_usernameHint:
    '4 ～ 24 キャラクター。ラテン文字で始める必要があります。ラテン文字、数字、ハウフン、下線 を使用できます。',
  RegisterForm_passwordLabel: 'パスワード：',
  RegisterForm_passwordPlaceholder: 'パスワードを思いついてください…',
  RegisterForm_passwordHint:
    '8 ～ 24 キャラクター。大文字と小文字、数字、特殊文字を含める必要があります。使用できる特殊文字：',
  RegisterForm_confirmLabel: 'パスワードを確認：',
  RegisterForm_confirmPlaceholder: 'まだパスワードを入力してください…',
  RegisterForm_confirmHint: 'パスワードが一致しません！',
  exclamationMarkName: '感嘆符',
  atMarkName: 'アットマーク',
  hashtagName: 'ハッシュタグ',
  dollarSignName: 'ドル記号',
  percentName: 'パーセント',
  namePrefix: '',
  nameSuffix: 'さん',
  language: '日本語',
});
