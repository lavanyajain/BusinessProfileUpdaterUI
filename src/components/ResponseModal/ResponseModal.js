import classes from "./ResponseModal.module.css";

const ResponseModal = (props) => {
    const renderProductsMessage = () => {
        const elements = [];
        const keys = Object.keys(response.batchValidationResponse.validationResponse);
        keys.map((key) => {
            const productMessage = response.batchValidationResponse.validationResponse[key].message;
            elements.push(<tr><td>{key}</td><td>{productMessage}</td></tr>);
        })
        return elements;
    }

    const response = props.data;
    const status = response.status;
    const message = response.message;
    return(
        <div className={classes.customers}>
            <tr><th>{message}</th></tr>
            <table>
            {renderProductsMessage(response)}
            </table>
        </div>
    )
}

export default ResponseModal;