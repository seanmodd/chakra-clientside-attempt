// ! KEEP THIS COMPONENT!!!
import Link from 'next/link';
import { useRouter } from 'next/router';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { currencyFormatter } from '../../redux/actions/stripe';
import { diffDays } from '../../redux/actions/hotel';

const BASE_URL = process.env.REACT_APP_API || 'http://localhost:8000/api';

function SmallCard({
  h,
  handleHotelDelete = (f) => f,
  owner = false,
  showViewMoreButton = true,
}) {
  const router = useRouter();
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            {h.image && h.image.contentType ? (
              <img
                src={`${BASE_URL}/hotel/image/${h._id}`}
                alt="default hotel view"
                className="card-image img img-fluid"
              />
            ) : (
              <img
                src="https://via.placeholder.com/900x500.png?text=MERN+Booking"
                alt="default hotel view"
                className="card-image img img-fluid"
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">
                {h.title}{' '}
                <span className="float-right text-primary">
                  {currencyFormatter({
                    amount: h.price * 100,
                    currency: 'usd',
                  })}
                </span>{' '}
              </h3>
              <p className="alert alert-info">{h.location}</p>
              <p className="card-text">{`${h.content.substring(0, 200)}...`}</p>
              <p className="card-text">
                <span className="float-right text-primary">
                  for {diffDays(h.from, h.to)}{' '}
                  {diffDays(h.from, h.to) <= 1 ? ' day' : ' days'}
                </span>
              </p>
              <p className="card-text">{h.bed} bed</p>
              <p className="card-text">
                Available from {new Date(h.from).toLocaleDateString()}
              </p>

              <div className="d-flex justify-content-between h4">
                {showViewMoreButton && (
                  <button
                    onClick={() => router.push(`/hotels/${h._id}`)}
                    className="btn btn-primary"
                  >
                    Show more
                  </button>
                )}
                {owner && (
                  <>
                    <Link href={`/hotels/edit/${h._id}`}>
                      <EditOutlined className="text-warning" />
                    </Link>
                    <DeleteOutlined
                      onClick={() => handleHotelDelete(h._id)}
                      className="text-danger"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmallCard;
