import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
// https://ckeditor.com/docs/ckeditor5/latest/framework/guides/plugins/creating-simple-plugin.html#final-code
// https://ckeditor.com/docs/ckeditor5/latest/features/images/images-styles.html    

export default class InsertImage extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'insertImage', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Insert image',
                icon: imageIcon,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                const imageUrl = prompt( 'Image URL' );
                if (imageUrl) {
                    editor.model.change( writer => {
                        const imageElement = writer.createElement( 'imageBlock', {
                            src: imageUrl
                        } );
    
                        // Insert the image in the current selection location.
                        editor.model.insertContent( imageElement, editor.model.document.selection );
                    } );
                }
            } );

            return view;
        } );
    }
}