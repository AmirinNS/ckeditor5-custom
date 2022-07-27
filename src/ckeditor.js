/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
// import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
// import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';

import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';

import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';

import sideIcon from '@ckeditor/ckeditor5-core/theme/icons/object-inline-right.svg';
import leftIcon from '@ckeditor/ckeditor5-core/theme/icons/object-left.svg';
import rightIcon from '@ckeditor/ckeditor5-core/theme/icons/object-right.svg';
import inlineIcon from '@ckeditor/ckeditor5-core/theme/icons/object-inline.svg';
import centerIcon from '@ckeditor/ckeditor5-core/theme/icons/object-center.svg';

// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
// import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
// import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';


class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Autoformat,
	BlockQuote,
	Bold,
	// CloudServices,
	Essentials,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	AutoImage,
	ImageInsert,
	Indent,
	Italic,
	Link,
	List,
	// MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	SourceEditing,
	GeneralHtmlSupport
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'imageInsert',
			'blockQuote',
			'insertTable',
			'undo',
			'redo',
			'sourceEditing'
		]
	},
	language: 'en',
	image: {
		styles: {
			// Defining custom styling options for the images.
			options: [ {
				name: 'side',
				icon: sideIcon,
				title: 'Side image',
				className: 'image-side',
				modelElements: [ 'imageBlock' ]
			}, {
				name: 'margin-left',
				icon: leftIcon,
				title: 'Image on left margin',
				className: 'image-margin-left',
				modelElements: [ 'imageInline' ]
			}, {
				name: 'margin-right',
				icon: rightIcon,
				title: 'Image on right margin',
				className: 'image-margin-right',
				modelElements: [ 'imageInline' ]
			},
			// Modifying icons and titles of the default inline and
			// block image styles to reflect its real appearance.
			{
				name: 'inline',
				icon: inlineIcon
			}, {
				name: 'block',
				title: 'Centered image',
				icon: centerIcon
			} ]
		},
		toolbar: [ {
			// Grouping the buttons for the icon-like image styling
			// into one drop-down.
			name: 'imageStyle:icons',
			items: [
				'imageStyle:margin-left',
				'imageStyle:margin-right',
				'imageStyle:inline'
			],
			defaultItem: 'imageStyle:margin-left'
		}, {
			// Grouping the buttons for the regular
			// picture-like image styling into one drop-down.
			name: 'imageStyle:pictures',
			items: [ 'imageStyle:block', 'imageStyle:side' ],
			defaultItem: 'imageStyle:block'
		}, '|', 'toggleImageCaption', 'linkImage'
		]
	},
	// image: {
	// 	// toolbar: [
	// 	// 	'imageTextAlternative',
	// 	// 	'imageStyle:inline',
	// 	// 	'imageStyle:block',
	// 	// 	'imageStyle:side'
	// 	// ],
	// 	toolbar: [
	// 		'imageStyle:block',
	// 		'imageStyle:side',
	// 		'|',
	// 		'toggleImageCaption',
	// 		'imageTextAlternative',
	// 		// '|',
	// 		// 'linkImage'
	// 	],
	// 	styles: {
	// 		// Defining custom styling options for the images.
	// 		options: [ {
	// 				name: 'side',
	// 				icon: sideIcon,
	// 				title: 'Side image',
	// 				className: 'image-side',
	// 				modelElements: [ 'imageBlock' ]
	// 			}, {
	// 				name: 'margin-left',
	// 				icon: leftIcon,
	// 				title: 'Image on left margin',
	// 				className: 'image-margin-left',
	// 				modelElements: [ 'imageInline' ]
	// 			}, {
	// 				name: 'margin-right',
	// 				icon: rightIcon,
	// 				title: 'Image on right margin',
	// 				className: 'image-margin-right',
	// 				modelElements: [ 'imageInline' ]
	// 			},
	// 			// Modifying icons and titles of the default inline and
	// 			// block image styles to reflect its real appearance.
	// 			{
	// 				name: 'inline',
	// 				icon: inlineIcon
	// 			}, {
	// 				name: 'block',
	// 				title: 'Centered image',
	// 				icon: centerIcon
	// 		} ]
	// 	}
	// },
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	htmlSupport: {
		allow: [
			{
				name: /.*/,
				attributes: true,
				classes: true,
				styles: true
			}
		]
	}	
};

export default Editor;
