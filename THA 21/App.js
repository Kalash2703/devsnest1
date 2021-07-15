import "./styles.css";

import { useState } from 'react';

function AddItemForm({ addItem }) {
	const [title, setTitle] = useState('');
	const [calorie, setCalorie] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		addItem({ title, calorie });
		setTitle('');
		setCalorie('');
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='form'>
			<div className='see'>
				<div className='num'>
					<label htmlFor='title' className='fun'>
						Title
					</label>
					<input
						type='text'
						name='title'
						id='title'
						required
						value={title}
						onChange={e => setTitle(e.target.value)}
						placeholder='Barbie Movies'
					/>
				</div>
				<div>
					<label htmlFor='calorie' className='fun'>
						Calorie
					</label>
					<input
						type='number'
						name='number'
						id='number'
						required
						value={calorie}
						onChange={e => setCalorie(e.target.value)}
						placeholder='Released date'
					/>
				</div>
			</div>
			<button type='submit' className='btn'>
				Add Item
			</button>
		</form>
	);
}

function RenderItem({ updateItem, removeItem, item, index }) {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<div className='out'>
			<div className='card-body'>
				{isEditing ? (
					<input
						type='text'
						name='title'
						id='title'
						required
						value={item.title}
						onChange={e => updateItem(index, { title: e.target.value })}
					/>
				) : (
					<h5 className='card-title'>{item.title}</h5>
				)}
				{isEditing ? (
					<input
						type='number'
						name='calorie'
						id='calorie'
						required
						value={item.calorie}
						onChange={e => updateItem(index, { calorie: e.target.value })}
					/>
				) : (
					<p className='card-text'>
						{' '}
						Released Date:{item.calorie}
					</p>
				)}
				<div className='cal'>
					<button className='btn1' onClick={() => removeItem(index)}>
						Delete
					</button>
					<button
						className='btn2'
						onClick={() => setIsEditing(!isEditing)}>
						{isEditing ? 'Done' : 'Edit'}
					</button>
				</div>
			</div>
		</div>
	);
}

export default function App() {
	const [items, setItems] = useState([]);

	const updateItem = (index, newItem) => {
		setItems(
			items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
		);
	};

	const addItem = item => {
		setItems([...items, item]);
	};

	const removeItem = index => {
		setItems(items.filter((item, i) => i !== index));
	};

	return (
    
    <div className='add'>
			<AddItemForm addItem={addItem} />
     
      <div className='outer'>
       
			    {items.length === 0 ? (
			    	<h3>Start Adding</h3>
			        ) : (
				        items.map((item, index) => (
                <RenderItem
                  item={item}
                  key={index}
                  index={index}
                  updateItem={updateItem}
                  removeItem={removeItem}
                />
				))
			)}
    </div>
    </div>
	);
}

