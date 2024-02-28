import { Formik, Form } from "formik"
import Input from "./atoms/Input"
import Button from "components/general/Button"

const SupportForm = () => {
    return (
        <Formik
            initialValues={{ text: '' }}
        >
            <Form>
                <Input 
                    className="mb-6" 
                    name="text" 
                    placeholder="Что случилось?"
                    autoComplete="off"
                />
                <Button className="w-full" type="submit">Отправить</Button>
            </Form>
        </Formik>
    )
}
/*dgsf*/
export default SupportForm