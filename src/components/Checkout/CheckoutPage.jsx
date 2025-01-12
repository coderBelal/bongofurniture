 
import { useState } from "react"
import { InfoIcon } from 'lucide-react'

export default function CheckoutPage() {
  const [useShippingAddress, setUseShippingAddress] = useState(true)
  const [selectedShipping] = useState('standard')
  const [selectedPayment] = useState('partial')
  const [selectedBilling, setSelectedBilling] = useState('same')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Contact</h2>
                <button className="text-blue-600 text-sm">Log in</button>
              </div>
              <input 
                type="text" 
                placeholder="Email or mobile phone number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="newsletter"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="newsletter" className="text-sm">Email me with news and offers</label>
              </div>
            </div>

            {/* Delivery Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Delivery</h2>
              <select 
                defaultValue="bangladesh" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="bangladesh">Bangladesh</option>
              </select>
              
              <div className="grid grid-cols-2 gap-4">
                <input 
                  placeholder="First name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  placeholder="Last name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <input 
                placeholder="Company (optional)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                placeholder="Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <input 
                  placeholder="City"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  placeholder="Postal code (optional)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <input 
                  placeholder="Phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <InfoIcon className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="save-info"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="save-info" className="text-sm">Save this information for next time</label>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Shipping method</h2>
              <div className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    id="standard" 
                    name="shipping"
                    value="standard"
                    checked={selectedShipping === 'standard'}
                    className="w-4 h-4 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="standard">Delivery Charge</label>
                </div>
                <span>৳600.00</span>
              </div>
            </div>

            {/* Payment Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Payment</h2>
              <p className="text-sm text-gray-500">All transactions are secure and encrypted.</p>
              
              <div className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    id="partial" 
                    name="payment"
                    value="partial"
                    checked={selectedPayment === 'partial'}
                    className="w-4 h-4 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="partial">Partial Cash on delivery</label>
                </div>
              </div>

              <div className="border rounded-lg p-4 space-y-2 text-sm">
                <p>You have to pay 10% of the total amount via any payment method below. You need to pay the rest of the amount during product delivery.</p>
                <div className="space-y-1 mt-4">
                  <p className="font-semibold">Bank Transfer/Deposit</p>
                  <p>Bank Name: DBBL</p>
                  <p>Account Name: Bongo Furniture</p>
                  <p>Account No: 211110003188</p>
                  <p>Branch Name: Pallabi Branch</p>
                  <p>Swift Code: DBBLBDDH</p>
                  <p>Routing Number: 090263581</p>
                  <p>Bkash/Nagad (Send Money):</p>
                  <p>+880 1710-724266 (Personal)</p>
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Billing address</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    id="same" 
                    name="billing"
                    value="same"
                    checked={selectedBilling === 'same'}
                    onChange={(e) => {
                      setSelectedBilling(e.target.value)
                      setUseShippingAddress(true)
                    }}
                    className="w-4 h-4 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="same">Same as shipping address</label>
                </div>
                <div className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    id="different" 
                    name="billing"
                    value="different"
                    checked={selectedBilling === 'different'}
                    onChange={(e) => {
                      setSelectedBilling(e.target.value)
                      setUseShippingAddress(false)
                    }}
                    className="w-4 h-4 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="different">Use a different billing address</label>
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md font-medium">
              Complete order
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg border space-y-4">
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 bg-gray-100 rounded">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-bongofurniture-checkouts-cn-Z2NwLWFzaWEtc291dGhlYXN0MTowMUpIQ0taUzc4OTdXRDU0MENDOERNUDg2Uw-2025-01-12-12_42_46-2jlyou6KjQbl79Rv3IbTfqEZO1qBSy.png"
                    alt="Victorian Chest of Drawer"
                    className="object-cover rounded"
                  />
                  <span className="absolute -top-2 -right-2 bg-gray-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    1
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Victorian Chest of Drawer - BFC405</p>
                  <p className="text-gray-600">৳26,000.00</p>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>৳26,000.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>৳600.00</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>৳26,600.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="  gap-4 justify-center grid grid-cols-3 text-sm text-blue-600 mt-8">
          <a href="#" className="hover:underline">Refund policy</a>
          <a href="#" className="hover:underline">Shipping policy</a>
          <a href="#" className="hover:underline">Privacy policy</a>
          <a href="#" className="hover:underline">Terms of service</a>
          <a href="#" className="hover:underline">Contact information</a>
        </div>
      </div>
    </div>
  )
}

