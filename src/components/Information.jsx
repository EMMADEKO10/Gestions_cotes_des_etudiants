

export default function Information() {
  return (
    <>
          <div className="relative rounded-lg border border-gray-200 shadow-sm w-[100%] m-0">
              {/* <button className="absolute -end-1 -top-1 rounded-full border border-gray-300 bg-gray-100 p-1">
                  <span className="sr-only">Close</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                      />
                  </svg>
              </button> */}

              <div className="flex items-center gap-4 p-4">
                  {/* <img
                      alt=""
                      src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      className="size-12 rounded-lg object-cover"
                  /> */}

                  <div>
                      <p className="font-medium text-gray-900 text-sm">Examen d Anglais</p>

                      <p className="line-clamp-1 text-sm text-gray-500">
                         Expreuve sur les pronoms en anglais
                         12:21PM
                      </p>
                  </div>
              </div>
          </div>
    </>
  )
}
