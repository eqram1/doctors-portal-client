import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor='booking-modal' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-5'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        <select className="select select-bordered w-full">

                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full input-bordered' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;