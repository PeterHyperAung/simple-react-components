import Accordion from "../components/Accordion";

const AccordionPage = () => {
    const items = [
        {
            id: 1,
            label: 'Can I use React on a project ?',
            content: 'You can use React on any project yout want. You can use React on any project yout want.You can use React on any project yout want.You can use React on any project yout want.You can use React on any project yout want.You can use React on any project yout want.You can use React on any project yout want.'
        },
        {
            id: 2,
            label: 'Can I use JavaScript on a project ?',
            content: 'You can use JavaScript on any project yout want. You can use JavaScript on any project yout want.You can use JavaScript on any project yout want.You can use JavaScript on any project yout want.You can use JavaScript on any project yout want.You can use JavaScript on any project yout want.You can use JavaScript on any project yout want.'
        },
        {
            id: 3,
            label: 'Can I use CSS on a project ?',
            content: 'You can use CSS on any project yout want. You can use CSS on any project yout want.You can use CSS on any project yout want.You can use CSS on any project yout want.You can use CSS on any project yout want.You can use CSS on any project yout want.You can use CSS on any project yout want.'
        }
    ]
    return <Accordion items={items} />
}

export default AccordionPage;
