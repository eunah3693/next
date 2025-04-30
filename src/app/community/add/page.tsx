


export default async function Community_Add() {
  return (
      <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 pb-12">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                  <div>
                      <label for="email" class="block text-sm/6 font-medium text-gray-900">TITLE</label>
                      <div className="mt-2">
                          <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                      </div>
                  </div>
                  <div>
                      <div className="flex items-center justify-between">
                          <label for="password" class="block text-sm/6 font-medium text-gray-900">CONTENT</label>
                      </div>
                      <div className="mt-2">
                          <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                      </div>
                  </div>
                  <div>
                      <div className="flex items-center justify-between">
                          <label for="password" class="block text-sm/6 font-medium text-gray-900">PASSWORD</label>
                      </div>
                      <div className="mt-2">
                          <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                      </div>
                  </div>
          
                  <div>
                      <button type="submit" className="flex w-full justify-center rounded-md bg-stone-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">REGISTER</button>
                  </div>
              </form>
          </div>
          </div>
      </div>

  );
}