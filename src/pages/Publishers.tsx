import { FormEvent, useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import Markdown from 'react-markdown'
import Swal from 'sweetalert2'

function Publishers() {
    let [text, setText] = useState<string>("");
    let [items, setItems] = useState<string[]>([]);

    return (
        <>
            <h3>Create Blog</h3>
            <form onSubmit={(e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                setItems([...items, text]);
                setText("");
            }}>
                <MarkdownEditor
                    value={text}
                    onChange={(value) => {
                        setText(value);
                    }}
                />
                <button type='submit' style={{ marginTop: '15px', border: 'none', backgroundColor: '#1877F2', color: '#fff', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }} onClick={() => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "New blog added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }}>
                    Add
                </button>
            </form>
            <hr />
            {
                items.map((item, idx) => {
                    return <Markdown key={idx}>{item}</Markdown>;
                })
            }
        </>
    )
}

export default Publishers