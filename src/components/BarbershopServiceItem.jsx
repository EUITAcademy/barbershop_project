

// The {...props} is a spread operator used in React to pass 
// all the props of a parent component to a child component. 
// It allows you to pass multiple props without 
// explicitly specifying each prop individually.
export default function BarbershopServiceItem({ title, isSelected, imageUrl, subtitle, ...props }) {

    return (

        <div style={isSelected ? {
            position: 'relative',
            backgroundColor: 'var(--color-card-background)',
            padding: '4rem',
            borderRadius: '10px',
            border: '4px solid #76453B'
        } : {
            position: 'relative',
            backgroundColor: 'var(--color-card-background)',
            padding: '4rem',
            borderRadius: '10px',
            border: '4px solid #B19470',
        }} {...props}>
            <img src={imageUrl} style={{
                width: '10em',
                height: '10em',
                objectFit: 'contain',
            }} />
            <div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>

    );
}