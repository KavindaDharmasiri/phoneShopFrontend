import React, {useEffect, useState} from 'react';
import { Modal, Form, Input, Select, Row, Col } from 'antd';
import PostService from "../../../../services/PostService";
import GetService from "../../../../services/GetService";
import EditService from "../../../../services/EditService";

const { Option } = Select;

const DummyPaymentModal = ({ visible, onCancel }) => {
    const [form] = Form.useForm();
    const [newId, setNewId] = useState(1);

    const handlePaymentSuccess = () => {
        window.open('http://localhost:3000/userbuyphone', '_self', 'noopener,noreferrer')
    };


    const getLastOrder = async () => {
        let res = await GetService.getLastOrder();
        console.log(res)

        if (res.status === 200) {
            setId(res.data)

        } else {
            console.log("fetching error: " + res)
            setId(res.data)
        }
    }

    const setId = (tr) => {
        if (tr == null){
            setNewId(1)

        }else {
            let tempone = tr.id;


            setNewId(parseInt(tempone)+1)
        }

    }

    useEffect(() => {
        getLastOrder();
    }, []);


    // Function to handle the form submission and simulate payment
    const handlePaymentSubmit = () => {
        form
            .validateFields()
            .then(async values => {
                // Simulate payment process here with the submitted data
                console.log('Payment Details:', values);

                const formData = new FormData();

                formData.append(
                    "id",
                    newId
                );
                formData.append(
                    "phoneId",
                    localStorage.getItem("dummyphoneId")
                );
                formData.append(
                    "userId",
                    localStorage.getItem("dummyuserId")
                );
                formData.append(
                    "name",
                    localStorage.getItem("dummyname")
                );
                formData.append(
                    "brand",
                    localStorage.getItem("dummybrand")
                );
                formData.append(
                    "quantity",
                    localStorage.getItem("dummyquantity")
                );
                formData.append(
                    "type",
                    "pending"
                );
                formData.append(
                    "price",
                    parseInt(localStorage.getItem("dummyprice")) * parseInt(localStorage.getItem("dummyquantity"))
                );
                formData.append(
                    "image1",
                    localStorage.getItem("dummyimage")
                );

                console.log(localStorage.getItem("dummyimage"))

                let response = await PostService.OrderMake(formData);
                if (response.status === 201) {

                    Modal.success({
                        content: 'Payment Successful!',
                        onOk: handlePaymentSuccess,
                    });

                    let resss = await GetService.getOnePhone(localStorage.getItem("dummyphoneId"));
                    resss.data.data.quatity = parseInt(resss.data.data.quatity) - parseInt(localStorage.getItem("dummyquantity"));

                    let resssss = await EditService.createEditPhonetwo(resss.data.data);
                } else {

                }


                // For testing purposes, you can set a dummy payment success message here

            })
            .catch(error => {
                console.log('Payment Error:', error);
            });
    };

    return (
        <Modal
            title="Secure Payment"
            visible={visible}
            onCancel={onCancel}
            onOk={handlePaymentSubmit} // Add an Ok button to submit the form
        >
            <Form form={form} layout="vertical">
                <p>Make your payment securely through your bank account</p>

                <Form.Item name="name" label="Cardholder's Name" rules={[{ required: true, message: "Please enter the cardholder's name" }]}>
                    <Input placeholder="Enter the cardholder's name" />
                </Form.Item>

                <Form.Item name="paymentMethod" label="Payment Method" rules={[{ required: true, message: 'Please select a payment method' }]}>
                    <Select placeholder="Select a payment method">
                        <Option value="visa">Visa</Option>
                        <Option value="mastercard">MasterCard</Option>
                        <Option value="paypal">PayPal</Option>
                        {/* Add more payment options as needed */}
                    </Select>
                </Form.Item>

                <Row gutter={8}>
                    <Col span={12}>
                        <Form.Item name="expiryMonth" label="Exp Date (Month)" rules={[{ required: true, message: 'Please enter the expiry month' }]}>
                            <Input placeholder="Enter the expiry month" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="expiryYear" label="Exp Date (Year)" rules={[{ required: true, message: 'Please enter the expiry year' }]}>
                            <Input placeholder="Enter the expiry year" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item name="cardNumber" label="Card Number" rules={[{ required: true, message: 'Please enter the card number' }]}>
                    <Input placeholder="Enter the card number" />
                </Form.Item>

                <Form.Item name="cvv" label="CVV" rules={[{ required: true, message: 'Please enter the CVV' }]}>
                    <Input placeholder="Enter the CVV" />
                </Form.Item>

                {/* Add more payment-related form fields as needed */}
            </Form>
        </Modal>
    );
};

export default DummyPaymentModal;
