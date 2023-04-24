
import { EditorContent } from '@tiptap/react'
import { MenuBar } from './components/MenuBar'


export const Tiptap = ({editor}) => {
    


    return (
        <>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </>
    )
}
