import { Languages } from '../scripts/interfaces';

export interface LangDataInterface {
  SearchBar_label: string;
  SearchBar_placeholder: string;
  Nav_home: string;
  Nav_createPost: string;
  Nav_about: string;
  Footer_text: string;
  Footer_themeTooltip: string;
  Home_header: string;
  CreatePost_header: string;
  EditPost_header: string;
  Missing_header: string;
  EditPostForm_titleLabel: string;
  EditPostForm_titlePlaceholder: string;
  EditPostForm_authorLabel: string;
  EditPostForm_authorPlaceholder: string;
  EditPostForm_contentLabel: string;
  EditPostForm_contentPlaceholder: string;
  EditPostForm_submit: string;
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
  Footer_themeTooltip: 'Change theme',
  Home_header: 'Homepage',
  CreatePost_header: 'Create Post',
  EditPost_header: 'Edit Post',
  Missing_header: 'Page not found',
  EditPostForm_titleLabel: 'Title:',
  EditPostForm_titlePlaceholder: 'What is your post about?',
  EditPostForm_authorLabel: 'Author:',
  EditPostForm_authorPlaceholder: 'Leave your name here.',
  EditPostForm_contentLabel: 'Post Body:',
  EditPostForm_contentPlaceholder: 'Start writing here…',
  EditPostForm_submit: 'Upload Post',
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
  Footer_themeTooltip: 'Сменить тему',
  Home_header: 'Главная',
  CreatePost_header: 'Создание записи',
  EditPost_header: 'Редактирование записи',
  Missing_header: 'Страница не найдена',
  EditPostForm_titleLabel: 'Название:',
  EditPostForm_titlePlaceholder: 'Про что вы хотите написать?',
  EditPostForm_authorLabel: 'Автор',
  EditPostForm_authorPlaceholder: 'Введите своё имя.',
  EditPostForm_contentLabel: 'Содержание:',
  EditPostForm_contentPlaceholder: 'Начните писать здесь…',
  EditPostForm_submit: 'Опубликовать',
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
  Footer_themeTooltip: 'テーマを変更',
  Home_header: 'ホーム',
  CreatePost_header: 'ポストを投稿',
  EditPost_header: 'ポストを編集',
  Missing_header: 'ページが見つかりません',
  EditPostForm_titleLabel: '題：',
  EditPostForm_titlePlaceholder: 'ポストは何ですか？',
  EditPostForm_authorLabel: '投稿者：',
  EditPostForm_authorPlaceholder: 'あなたの名前を入力してください。',
  EditPostForm_contentLabel: '本文:',
  EditPostForm_contentPlaceholder: 'ここに書き始めてください…',
  EditPostForm_submit: '投稿する',
  namePrefix: '',
  nameSuffix: 'さん',
  language: '日本語',
});
